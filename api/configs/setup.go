package configs

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

//ConnectDB()で、env.goのEnvMongoURI()関数で返したMONGOURIに接続
//1. 受け取ったURIが正しいかチェック
func ConnectDB() *mongo.Client {
	client, err := mongo.NewClient(options.Client().ApplyURI(EnvMongoURI()))
	if err != nil {
		log.Fatal(err)
	}

	//2. 接続時間が10秒超えた場合は接続キャンセル
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}

	//3. 接続をテストしてるらしい
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}
	//4. 「MongoDBへの接続成功しましたよ」ってメッセージ
	fmt.Println("Connected to MongoDB")
	//clientインスタンスを返してるらしい
	return client
}

//ConnectDB()の返り値をインスタンス変数として変数DBに格納
var DB *mongo.Client = ConnectDB()

//データベースの中のコレクションをとってくる
func GetCollection(client *mongo.Client, collectionName string) *mongo.Collection {
	collection := client.Database("golangDB").Collection(collectionName)
	return collection
}
