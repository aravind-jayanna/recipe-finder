## Backend service
1. Navigate to the React-API folder `~cd path/to/react_api/helper`
    Run `python3 dataProcessing.py` which will use input.json (input data), and convert a json for bulk import(output.json) and also create an index with appropriate provided mapping.

2. Navigate to the React-API folder `~cd path/to/react_api/helper` in terminal and Run:

`curl -s -H "Content-Type: application/json" -XPOST \
'http://localhost:9200/_bulk' --data-binary @/path/to/products.json`

2. Now navigate to Navigate to the React-API folder `~cd path/to/react_api` and run the Flask application by `python3 app.py`

3. You can verify by `http://127.0.0.1:5000/`, you will get a response "Elasticsearch API is running!"
