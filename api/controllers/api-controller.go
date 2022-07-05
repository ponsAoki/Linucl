package controllers

import (
	"net/http"

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

func (cmc *CommandController) GetCommand(ctx *gin.Context) {
	commandName := ctx.Param("command")
	command, err := cmc.CommandService.GetCommand(&commandName)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, command)
}

func (cmc *CommandController) GetAll(ctx *gin.Context) {
	commands, err := cmc.CommandService.GetAll()
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, commands)
}

func (cmc *CommandController) RegisterApiRoutes(rg *gin.RouterGroup) {
	apiroute := rg.Group("/api")
	apiroute.GET("/typingGame", cmc.GetCommand)
	apiroute.GET("/allCommands", cmc.GetAll)
}
