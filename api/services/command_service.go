package services

import "example.com/go-apis/models"

//インターフェース: メソッドの一覧を定義した型
type CommandService interface {
	GetTaskSet(*string) ([]*models.Task, error)
	// GetAll() ([]*models.Task, error)
}
