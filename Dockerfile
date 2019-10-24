FROM       ubuntu:16.04 
MAINTAINER h.river771@gmail.com

RUN	apt-get -y update
RUN	apt-get -y install software-properties-common
RUN	add-apt-repository ppa:deadsnakes/ppa
RUN	apt-get -y update
RUN	apt-get -y install python3.6
RUN	apt-get -y install build-essential


COPY	./docker.py .

CMD	./docker.py
