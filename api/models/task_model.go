package models

type Task struct {
	Desc   string `json:"question" bson:"desc"`
	Answer string `json:"answer" bson:"answer"`
}

type Quiz struct {
	Desc   string `json:"question" bson:"desc"`
	Answer string `json:"answer" bson:"answer"`
}
