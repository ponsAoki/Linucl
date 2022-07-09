package models

type Task struct {
	Desc   string `json:"desc" bson:"desc"`
	Answer string `json:"answer" bson:"answer"`
}

type Quiz struct {
	Desc   string `json:"desc" bson:"desc"`
	Answer string `json:"answer" bson:"answer"`
}
