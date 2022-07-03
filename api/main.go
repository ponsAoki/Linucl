package main

import (
	"example.com/go-apis/configs"
	"example.com/go-apis/controllers"
)

func main() {
	router := controllers.Router()

	//アプリケーション起動時にデータベース接続
	configs.ConnectDB()

	router.Run("localhost:8000")
}
