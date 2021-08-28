'use strict';


{
	// 数値の合計と平均を求める
	const scores = [10,3,9];

	let sum = 0;

	scores.forEach(score => {
		sum += score;
	});

	const avg = sum / scores.length;
	console.log(sum);
	console.log(avg);

	// 小数点以下切り捨て
	console.log(Math.floor(avg));

	// 小数点以下切り上げ
	console.log(Math.ceil(avg));


	// 四捨五入
	console.log(Math.round(avg));

	// 指定した桁数になるように数値を丸めたい場合
	console.log(avg.toFixed(3));

	// 乱数を生成する 0以上1未満
	console.log(Math.random());


}
