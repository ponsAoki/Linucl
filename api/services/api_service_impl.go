package services

import (
	"context"
	"errors"
	"fmt"
	"math/rand"
	"time"

	"example.com/go-apis/configs"
	"example.com/go-apis/models"
	"go.mongodb.org/mongo-driver/bson"
)

func NewApiService(ctx context.Context) ApiService {
	return &ApiServiceImpl{
		// connectedDB: connectedDB,
		ctx: ctx,
	}
}

type ApiServiceImpl struct {
	// connectedDB *mongo.Database
	ctx context.Context
}

//タイピングの問題セット取得してくる
func (cm *ApiServiceImpl) GetTaskSet(collection *string) ([]*models.Task, error) {
	//DBからとってきた配列を格納するための空スライス
	var tasks []*models.Task

	//ランダムなコレクションから全件取得
	cursor, err := configs.OpenCollection(configs.Client, *collection).Find(cm.ctx, bson.D{})
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

//クイズの選択肢と解答取得してくる
func (cm *ApiServiceImpl) GetQuizSet(collection *string) ([]*string, *models.Quiz, error) {
	//DBからとってきた配列を格納するための空スライス
	var quizSet []*models.Quiz
	//選択肢を格納する空スライス
	var selects []*string

	//ランダムなコレクションからランダムに4つ取得
	pipeline := []bson.D{bson.D{{"$sample", bson.D{{"size", 4}}}}}
	cursor, err := configs.OpenCollection(configs.Client, *collection).Aggregate(context.Background(), pipeline)
	if err != nil {
		return nil, nil, err
	}

	//cursor.Next()で1つ1つのデータに対して処理していく
	//コマンド1つ1つをtasksスライスに格納していく
	for cursor.Next(cm.ctx) {
		var quiz models.Quiz
		//DecodeでJSON=>構造体に変換
		err := cursor.Decode(&quiz)
		if err != nil {
			return nil, nil, err
		}
		selects = append(selects, &quiz.Answer)
		quizSet = append(quizSet, &quiz)
	}

	//上記のforの反復中にエラーが生じたときの処理
	if err := cursor.Err(); err != nil {
		return nil, nil, err
	}

	cursor.Close(cm.ctx)

	if len(quizSet) == 0 {
		return nil, nil, errors.New("documents not found")
	}

	quizIndexes := []int{0, 1, 2, 3}
	rand.Seed(time.Now().UnixNano())
	// for i := 0; i < 10; i++ {
	// 	num := rand.Intn(len(collections))
	// 	fmt.Println(collections[num])
	// }
	selectedIndex := rand.Intn(len(quizIndexes))
	fmt.Println(selectedIndex)

	selectedQuiz := quizSet[selectedIndex]
	fmt.Println(selectedQuiz)

	// fmt.Println(*&quizSet[0].Answer)

	return selects, selectedQuiz, nil
}
