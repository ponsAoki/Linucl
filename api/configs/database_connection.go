package configs

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectDB() *mongo.Client {
	//以下、MongoDBAtlasつなぐときの慣例みたいなやつ
	mongoclient, err := mongo.NewClient(options.Client().ApplyURI(EnvMongoURI()))
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

var Client *mongo.Client = ConnectDB()

func OpenCollection(client *mongo.Client, collectionName string) *mongo.Collection {
	var collecion *mongo.Collection = client.Database("golangDB").Collection(collectionName)
	return collecion
}
