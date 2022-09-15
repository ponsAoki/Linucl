package routes

import (
	controller "example.com/go-apis/controllers"
	"github.com/gin-gonic/gin"
)

func AuthRoutes(rg *gin.RouterGroup) {
	rg.POST("/users/signup", controller.Signup())
	rg.POST("/users/signup", controller.Login())

}
