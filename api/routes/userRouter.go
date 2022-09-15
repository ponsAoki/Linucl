package routes

import (
	controller "example.com/go-apis/controllers"
	"example.com/go-apis/middleware"
	"github.com/gin-gonic/gin"
)

func UserRoutes(rg *gin.RouterGroup) {
	rg.Use(middleware.Authenticate())
	rg.GET("/users", controller.GetUsers())
	rg.GET("/users/:user_id", controller.GetUser())
}
