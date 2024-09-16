from flask import Flask, request, jsonify
from elasticsearch import Elasticsearch
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Initialize Elasticsearch client
es = Elasticsearch(["http://localhost:9200"])

# Index name
index_name = 'recipe_index'

# Health check route
@app.route('/')
def index():
    return "Elasticsearch API is running!"

# Helper function to get pagination parameters
def get_pagination_params():
    start = int(request.args.get('start', 0)) 
    size = int(request.args.get('size', 20))   
    return start, size

# Unified search route
@app.route('/search', methods=['GET'])
def search():
    # Get query parameters
    title = request.args.get('title', '')
    category = request.args.get('category', '')
    min_calories = float(request.args.get('min', 0))
    max_calories = float(request.args.get('max', 10000))
    keyword = request.args.get('keyword', '')

    # Pagination parameters
    start, size = get_pagination_params()

    # Build query
    must_queries = []

    # Apply filters based on provided parameters
    if title:
        must_queries.append({
            "wildcard": {
                "title": f"*{title.lower()}*"
            }
        })
    if category:
        must_queries.append({"match": {"categories": category}})
    if min_calories is not None and max_calories is not None:
        must_queries.append({
            "range": {
                "calories": {
                    "gte": min_calories,
                    "lte": max_calories
                }
            }
        })
    if keyword:
        query = {
            "query": {
                "multi_match": {
                    "query": keyword,
                    "fields": ["title", "ingredients", "directions"]
                }
            },
            "from": start,
            "size": size
        }
    else:
        query = {
            "query": {
                "bool": {
                    "must": must_queries
                }
            },
            "from": start,
            "size": size
        }

    response = es.search(index=index_name, body=query)
    return jsonify(response['hits']['hits'])

if __name__ == '__main__':
    app.run(debug=True)
