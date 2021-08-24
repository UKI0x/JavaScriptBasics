'use strict';

{

	// 分割代入
	// 配列の中身を別々の定数にしたい場合
	const scores = [80,90,40,70];
	
	// const [a,b,c,d] = scores;
	// console.log(a);
	// console.log(b);
	// console.log(c);
	// console.log(d);

	// 定数に入れたいのは最初の2つだけで、後の2つは配列のままで良かった場合
	// レスト構文：分割代入と一緒に使うと、先に割り当てた以外の要素を指定した名前の配列に格納してくれる
	// const [a,b, ...others] = scores;
	// console.log(a);
	// console.log(b);
	// console.log(others);

	// 値の交換
	let x = 30;
	let y = 70;
	[x,y] = [y,x];
	console.log(x);
	console.log(y);

}

