<!-- To access the mongodb docker container run -->

docker run -d  --name mongodbauth -p 27017:27017  -e MONGO_INITDB_ROOT_USERNAME=admin  -e MONGO_INITDB_ROOT_PASSWORD=example mongo