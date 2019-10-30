#!/bin/bash

docker rm docker -f

docker build -t start .
docker run --name="docker" -p 4000:4000 start &
./agent.py & 
