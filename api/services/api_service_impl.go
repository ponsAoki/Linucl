package services

import (
	"context"
	"errors"

	"example.com/go-apis/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func NewApiService(connectedDB *mongo.Database, ctx context.Context) ApiService {
	return &ApiServiceImpl{
		connectedDB: connectedDB,
		ctx:         ctx,
	}
}

type ApiServiceImpl struct {
	connectedDB *mongo.Database
	ctx         context.Context
}

func (cm *ApiServiceImpl) GetTaskSet(collection *string) ([]*models.Task, error) {
	//DBからとってきた配列を格納するための空スライス
	var tasks []*models.Task

	//ランダムなコレクションから全件取得
	cursor, err := cm.connectedDB.Collection(*collection).Find(cm.ctx, bson.D{})
	if err != nil {
		return nil, err
	}

	//cursor.Next()で1つ1つのデータに対して処理していく
	//コマンド1つ1つをtasksスライスに格納していく
	for cursor.Next(cm.ctx) {
		var task models.Task
		//DecodeでJSON=>構造体に変換
		err := cursor.Decode(&task)
		if err != nil {
			return nil, err
		}
		tasks = append(tasks, &task)
	}

	//上記のforの反復中にエラーが生じたときの処理
	if err := cursor.Err(); err != nil {
		return nil, err
	}

	cursor.Close(cm.ctx)

	if len(tasks) == 0 {
		return nil, errors.New("documents not found")
	}

	return tasks, nil
}

//以前の全件取得
// func (cm *CommandServiceImpl) GetAll() ([]*models.Command, error) {
// 	var commands []*models.Command
// 	cursor, err := cm.commandcollection.Find(cm.ctx, bson.D{})
// 	if err != nil {
// 		return nil, err
// 	}
// 	// fmt.Printf("%s\n", *cursor)

// 	//cursor.Next()で1つ1つのデータに対して処理していく
// 	//コマンド1つ1つを新しいスライスに格納していく
// 	for cursor.Next(cm.ctx) {
// 		var command models.Command
// 		err := cursor.Decode(&command)
// 		if err != nil {
// 			return nil, err
// 		}
// 		commands = append(commands, &command)
// 	}

// 	//上記のforで反復中にエラーが生じたときの処理
// 	if err := cursor.Err(); err != nil {
// 		return nil, err
// 	}

// 	cursor.Close(cm.ctx)

// 	if len(commands) == 0 {
// 		return nil, errors.New("documents not found")
// 	}

// 	results, _ := json.Marshal(commands)
// 	fmt.Print(commands)
// 	fmt.Printf("%s\n", results)
// 	return commands, nil
// }
