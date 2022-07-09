package services

import "example.com/go-apis/models"

//インターフェース: メソッドの一覧を定義した型
type ApiService interface {
	GetTaskSet(*string) ([]*models.Task, error)
	GetQuizSet(*string) ([]*string, *models.Quiz, error)
}
