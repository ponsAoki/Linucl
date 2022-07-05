package models

type Command struct {
	Number   int    `json:"number" bson:"number"`
	ACommand string `json:"command" bson:"command"`
}
