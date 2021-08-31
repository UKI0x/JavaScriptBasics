'use strict';


{
	// 乱数を生成する 0以上1未満
	// console.log(Math.random());


	// // Math.randomで作成する乱数以外に欲しい数値がある場合
	// //randomの値に数値をかけて、小数点以下を切り捨てるfloorを使用する
	
	// //0-2までの乱数を作成したい場合
	// Math.floor(Math.random() * 3);

	// //0からn（任意の数）の乱数を作成したい場合
	// Math.floor(Math.random() * (n+1));

	// //min-max
	// Math.floor(Math.random() * (max + 1 -min))+ min

	//例：1-6までの数値がランダムに出ている
	console.log(Math.floor(Math.random() * 6)+ 1);
}
