package controllers

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"example.com/go-apis/configs"
	"example.com/go-apis/models"
	"example.com/go-apis/responses"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var commandCollection *mongo.Collection = configs.GetCollection(configs.DB, "コマンド")

func GetCommands() gin.HandlerFunc {
	return func(c *gin.Context) {
		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		var commands []models.Command
		defer cancel()

		results, err := commandCollection.Find(ctx, bson.M{})
		fmt.Println(*results)

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"data": "error"})
			return
		}

		defer results.Close(ctx)
		for results.Next(ctx) {
			var singleCommand models.Command
			if err = results.Decode(&singleCommand); err != nil {
				c.JSON(http.StatusInternalServerError, responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: map[string]interface{}{"data": err.Error()}})
			}
			commands = append(commands, singleCommand)
		}

		c.JSON(http.StatusOK, responses.UserResponse{Status: http.StatusOK, Message: "success", Data: map[string]interface{}{"data": commands}})
	}
	// client, ctx, cancel := configs.ConnectDB()
	// defer cancel()
	// defer client.Disconnect(ctx)
	// // ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	// var command models.Command
	// commands, err := client.Database("golangDB").Collection("コマンド").Find(bson.M{}).Decode(&command)

	// fmt.Println("ここまできたよ")

	// if err != nil {
	// 	c.JSON(http.StatusInternalServerError, gin.H{"msg": err.Error()})
	// 	fmt.Println("エラー")
	// 	return
	// }

	// c.JSON(http.StatusOK, gin.H{"msg": "success"})
	// fmt.Println("errの中身が上手く入っていない可能性")
	// return err
}
