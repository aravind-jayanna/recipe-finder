import json
from elasticsearch import Elasticsearch, exceptions, helpers

# Initialize the Elasticsearch client
es = Elasticsearch(["http://localhost:9200"])

# Define the index name
index_name = 'recipe_index'

# Define the mapping properties
mapping = {
    "mappings": {
        "properties": {
            "title": {"type": "text"},
            "directions": {"type": "text"},
            "ingredients": {"type": "text"},
            "categories": {"type": "keyword"},
            "calories": {"type": "float"},
            "fat": {"type": "float"},
            "protein": {"type": "float"},
            "sodium": {"type": "float"},
            "rating": {"type": "float"},
            "date": {"type": "date"}
        }
    }
}

# Create the index with the specified mapping
if not es.indices.exists(index=index_name):
    es.indices.create(index=index_name, body=mapping)
    print(f"Index '{index_name}' created with the provided mapping.")
else:
    print(f"Index '{index_name}' already exists.")

def convert_to_bulk_format(input_file, output_file):
    try:
        with open(input_file, 'r') as f:
            data = json.load(f)
    except Exception as e:
        print(f"Error reading input file: {e}")
        return

    try:
        with open(output_file, 'w') as f:
            for i, doc in enumerate(data):
                # Write the action metadata line
                f.write(json.dumps({"index": {"_index": index_name, "_id": str(i+1)}}) + '\n')
                # Write the document source line
                f.write(json.dumps(doc) + '\n')
        print(f"Data converted to bulk format and saved to '{output_file}'.")
    except Exception as e:
        print(f"Error writing to output file: {e}")

input_file = 'input.json'
output_file = 'output.json'
convert_to_bulk_format(input_file, output_file)
# bulk_index_data(output_file)
