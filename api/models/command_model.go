package models

type Command struct {
	questionId string `json:"questionId" bson:"questionId"`
	command    string `json:"command" bson:"command"`
}
