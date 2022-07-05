package services

import (
	"context"
	"errors"

	"example.com/go-apis/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func NewCommandService(commandcollection *mongo.Collection, ctx context.Context) CommandService {
	return &CommandServiceImpl{
		commandcollection: commandcollection,
		ctx:               ctx,
	}
}

type CommandServiceImpl struct {
	commandcollection *mongo.Collection
	ctx               context.Context
}

//db.collection.find({name: "somothing"})
func (cm *CommandServiceImpl) GetCommand(command *string) (*models.Command, error) {
	var resCommand *models.Command
	query := bson.D{bson.E{Key: "command", Value: command}}
	//FindOneでとってきたjsonを、DecodeでresCommandに格納
	err := cm.commandcollection.FindOne(cm.ctx, query).Decode(&resCommand)
	return resCommand, err
}

func (cm *CommandServiceImpl) GetAll() ([]*models.Command, error) {
	var commands []*models.Command
	cursor, err := cm.commandcollection.Find(cm.ctx, bson.D{})
	if err != nil {
		return nil, err
	}
	//コマンド1つ1つを新しいスライスに格納していく
	for cursor.Next(cm.ctx) {
		var command models.Command
		err := cursor.Decode(&command)
		if err != nil {
			return nil, err
		}
		commands = append(commands, &command)
	}

	//上記のforで反復中にエラーが生じたときの処理
	if err := cursor.Err(); err != nil {
		return nil, err
	}

	cursor.Close(cm.ctx)

	if len(commands) == 0 {
		return nil, errors.New("documents not found")
	}
	return commands, nil
}
