package main

import (
	"log"
	"net"
	"os"
	"os/signal"

	"google.golang.org/grpc"
)

func main() {
	port := "8080"
	lis, err := net.Listen("tcp", ":"+port)
	if err != nil {
		log.Fatalf("faild to listen: %v", err)
	}
	ctn, err := registry.NewContainer()
	if err != nil {
		log.Fatalf("failed to build container: %v", err)
	}

	server := grpc.NewServer()

	rpc.Apply(server, ctn)

	go func() {
		log.Printf("start grpc server port: %s", port)
		server.Serve(lis)
	}()

	quit := make(chan os.Signal)
	signal.Notify(quit, os.Interrupt)
	<-quit
	log.Println("stopping grpc server...")
	server.GracefulStop()
	ctn.Clean()
}
