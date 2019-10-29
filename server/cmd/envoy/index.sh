docker build -t envoy-10 .
docker run -d --name envoy -p 9901:9901 -p 10000:10000 -p 9090:9090 envoy:v1