'use strict';

{

	// 分割代入
	// 配列の中身を別々の定数にしたい場合
	const scores = [80,90,40,70];
	
	const [a,b,c,d] = scores;
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);

	//レスト構文
	const [a,b, ...others] = scores;
}

