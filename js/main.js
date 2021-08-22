'use strict';

{
	
	// const sccore1 = 80;
	// const sccore2 = 90;
	// const sccore3 = 40;

	const scores = [80,90,40];
	console.log(scores);
	// 配列の要素1つだけを出力する
	console.log(scores[1]);

	// 定数でも、配列の要素は変更できる
	scores[2] = 44;
	console.log(scores);

	// 配列の要素数を出力　要素名.length
	console.log(scores.length);

	// console.log(`Score: ${scores[0]}`);
	// console.log(`Score: ${scores[1]}`);
	// console.log(`Score: ${scores[2]}`);
	// ただし、上記の書き方では要素数が1000個とかになると出力が辛いのでループ文にさせる

	// for(let i =0; i < 3;i++){
	for(let i =0; i < scores.length;i++){
		console.log(`Score ${i}: ${scores[i]}`);
	}
}
