#!/bin/bash

#docker build -t client .
docker rm client -f
docker run --name="client" -it client
