# recipe-finder
Recipe finder implemented using react, python and elastic search

## Elasticsearch and Kibana Setup using Docker

This guide provides instructions on how to set up Elasticsearch and Kibana using Docker for local development and testing purposes.

## Prerequisites
- [Docker](https://www.docker.com/get-started) installed on your machine.

## Steps to Set Up

### 1. Create a Docker Network
First, create a Docker network so that Elasticsearch and Kibana can communicate with each other.

```
docker network create elastic
```

### 2. Pull and run elasticSearch container:

```
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.17.24

docker run --name es01-test --net elastic \
  -p 127.0.0.1:9200:9200 \
  -p 127.0.0.1:9300:9300 \
  -e "discovery.type=single-node" \
  docker.elastic.co/elasticsearch/elasticsearch:7.17.24
```

elasticSearch will be available at `http://127.0.0.1:9200`

### 3. Pull and run Kibana container:

```
docker pull docker.elastic.co/kibana/kibana:7.17.24

docker run --name kib01-test --net elastic \
  -p 127.0.0.1:5601:5601 \
  -e "ELASTICSEARCH_HOSTS=http://es01-test:9200" \
  docker.elastic.co/kibana/kibana:7.17.24

```

### 4. Verify setup:

verify elasticSearch by running this command in terminal: `curl -X GET "127.0.0.1:9200/"`.
verify Kibana by opening : `http://127.0.0.1:9200` in chrome.