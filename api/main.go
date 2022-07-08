package main

import (
	"context"
	"fmt"
	"log"

	"example.com/go-apis/controllers"
	"example.com/go-apis/services"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

var (
	server        *gin.Engine
	apiservice    services.ApiService
	apiconrtoller controllers.ApiController
	ctx           context.Context
	// connectedCollection *mongo.Collection
	connectedDB *mongo.Database
	mongoclient *mongo.Client
	err         error
)

func init() {
	ctx = context.TODO()

	mongoconn := options.Client().ApplyURI("mongodb://localhost:27017")
	mongoclient, err = mongo.Connect(ctx, mongoconn)
	if err != nil {
		log.Fatal(err)
	}
	err = mongoclient.Ping(ctx, readpref.Primary())
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("mongo connection established")

	//ここ重要
	//golangDBに接続までを初期設定とする
	connectedDB = mongoclient.Database("golangDB")
	apiservice = services.NewApiService(connectedDB, ctx)
	apiconrtoller = controllers.New(apiservice)
	server = gin.Default()
}

func main() {
	defer mongoclient.Disconnect(ctx)

	//baseURL決定
	basepath := server.Group("/v1")
	apiconrtoller.RegisterApiRoutes(basepath)

	log.Fatal(server.Run("localhost:8000"))
}
