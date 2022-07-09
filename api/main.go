package main

import (
	"context"
	"log"
	"time"

	"example.com/go-apis/configs"
	"example.com/go-apis/controllers"
	"example.com/go-apis/services"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
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

func main() {
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"https://localhost:3000"},
		AllowMethods: []string{"GET"},
		AllowHeaders: []string{"Access-Control-Allow-Credentials",
			"Access-Control-Allow-Headers",
			"Content-Type",
			"Content-Length",
			"Accept-Encoding",
			"Authorization",
			"Origin",
			"X-CSRF-Token",
			"accept",
			"origin",
			"Cache-Control",
			"X-Requested-With",
		},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "http://localhost:3000"
		},
		MaxAge: 12 * time.Hour,
	}))

	//ConnectDB()で返されたmongoclientをclientに格納
	client := configs.ConnectDB()

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
