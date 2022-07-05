package services

import "example.com/go-apis/models"

type CommandService interface {
	GetCommand(*string) (*models.Command, error)
	GetAll() ([]*models.Command, error)
}
