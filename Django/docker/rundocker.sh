#!/bin/bash

docker build -t docker .
docker rm docker -f
docker run --net=host --name="docker" -it docker /bin/bash
