package controllers

import (
	"fmt"
	"math/rand"
	"net/http"
	"time"

	"example.com/go-apis/services"
	"github.com/gin-gonic/gin"
)

type ApiController struct {
	ApiService services.ApiService
}

func New(apiservice services.ApiService) ApiController {
	return ApiController{
		ApiService: apiservice,
	}
}

func (cmc *ApiController) GetTaskSet(ctx *gin.Context) {
	//["A", "B", "C"]のスライスの中からランダムに1個取得
	collections := []string{"A", "B", "C"}
	rand.Seed(time.Now().UnixNano())
	// for i := 0; i < 10; i++ {
	// 	num := rand.Intn(len(collections))
	// 	fmt.Println(collections[num])
	// }
	collectionIndex := rand.Intn(len(collections))

	collectionName := collections[collectionIndex]
	fmt.Println(collectionName)
	//ランダムに取得したコレクション名をGetTaskSet()関数に引数として渡す
	collection, err := cmc.ApiService.GetTaskSet(&collectionName)

	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, collection)
}

//クイズの問題とってくる関数
func (cmc *ApiController) GetQuizSet(ctx *gin.Context) {
	//["A", "B", "C"]のスライスの中からランダムに1個取得
	collections := []string{"A", "B", "C"}
	rand.Seed(time.Now().UnixNano())
	// for i := 0; i < 10; i++ {
	// 	num := rand.Intn(len(collections))
	// 	fmt.Println(collections[num])
	// }
	collectionIndex := rand.Intn(len(collections))

	collectionName := collections[collectionIndex]
	fmt.Println(collectionName)
	//ランダムに取得したコレクション名をGetQuizSet()関数に引数として渡す
	selects, selectedQuiz, err := cmc.ApiService.GetQuizSet(&collectionName)

	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"selects": selects, "QAset": selectedQuiz})
}

// func (cmc *CommandController) GetAll(ctx *gin.Context) {
// 	commands, err := cmc.CommandService.GetAll()
// 	if err != nil {
// 		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
// 		return
// 	}
// 	ctx.JSON(http.StatusOK, commands)
// }

func (cmc *ApiController) RegisterApiRoutes(rg *gin.RouterGroup) {
	apiroute := rg.Group("/api")
	apiroute.GET("/typingGame", cmc.GetTaskSet)
	apiroute.GET("/quiz", cmc.GetQuizSet)
}
