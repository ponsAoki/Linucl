package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"example.com/go-apis/configs"
	"example.com/go-apis/controllers"
	"example.com/go-apis/services"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	// server        *gin.Engine
	apiservice    services.ApiService
	apiconrtoller controllers.ApiController
	ctx           context.Context
	// connectedCollection *mongo.Collection
	connectedDB *mongo.Database
	mongoclient *mongo.Client
	// err         error
)

func ConnectDB() *mongo.Client {
	//以下、MongoDBAtlasつなぐときの慣例みたいなやつ
	mongoclient, err := mongo.NewClient(options.Client().ApplyURI(configs.EnvMongoURI()))
	if err != nil {
		log.Fatal(err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	err = mongoclient.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
	err = mongoclient.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("mongo connection established")

	return mongoclient

}

func main() {
	router := gin.Default()

	//ConnectDB()で返されたmongoclientをclientに格納
	client := ConnectDB()

	//ここ重要
	//golangDBに接続までを初期設定とする
	connectedDB = client.Database("golangDB")
	apiservice = services.NewApiService(connectedDB, ctx)
	apiconrtoller = controllers.New(apiservice)

	//これよく解ってない
	defer mongoclient.Disconnect(ctx)

	//baseURL決定
	basepath := router.Group("/v1")
	apiconrtoller.RegisterApiRoutes(basepath)

	//ポート番号8000番に接続
	log.Fatal(router.Run("localhost:8000"))
}

//main.goこんなに長くせず、ConnectDB()部分他のファイルに移した方がいいかも
