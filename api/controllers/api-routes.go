package controllers

import (
	"github.com/gin-gonic/gin"
)

func Router() *gin.Engine {
	r := gin.Default()
	r.GET("/api/typingGame", GetCommands())
	return r
}
