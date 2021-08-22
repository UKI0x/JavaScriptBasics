'use strict';

{

	// スプレッド構文
	const otherScores = [10,20];
	// 定数scoresにotherScoresの中身を追加したい場合
	// const scores = [80,90,40,70, otherScores];これでは定数の中に更に定数が入ってしまう
	const scores = [80,90,40,70, ...otherScores];
	console.log(scores);
	
	// スプレッド構文は関数の引数にも使われる
	function sum(a,b){
		console.log(a + b);
	}
	sum(...otherScores);
	// sum(10,20);
}

