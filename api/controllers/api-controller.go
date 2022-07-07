package controllers

import (
	"fmt"
	"math/rand"
	"net/http"
	"time"

	"example.com/go-apis/services"
	"github.com/gin-gonic/gin"
)

type CommandController struct {
	CommandService services.CommandService
}

func New(commandservice services.CommandService) CommandController {
	return CommandController{
		CommandService: commandservice,
	}
}

func (cmc *CommandController) GetTaskSet(ctx *gin.Context) {
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
	collection, err := cmc.CommandService.GetTaskSet(&collectionName)

	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, collection)
}

// func (cmc *CommandController) GetAll(ctx *gin.Context) {
// 	commands, err := cmc.CommandService.GetAll()
// 	if err != nil {
// 		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
// 		return
// 	}
// 	ctx.JSON(http.StatusOK, commands)
// }

func (cmc *CommandController) RegisterApiRoutes(rg *gin.RouterGroup) {
	apiroute := rg.Group("/api")
	apiroute.GET("/typingGame", cmc.GetTaskSet)
	// apiroute.GET("/allCommands", cmc.GetAll)
}
