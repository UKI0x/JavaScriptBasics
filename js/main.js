'use strict';


{
	// let x = 1;
	// let y = x;
	// x = 5;
	// console.log(x);  //5
	// console.log(y); //1
	// let x = [1,2];
	// let y = x;
	// x[0] = 5;
	// console.log(x);  //[5,2]
	// console.log(y); //[1,2]ではなく[5,2]になる

	// 複雑なデータ型はデータ量が大きくなることも多いので、
	// 丸ごと値をコピーしてシステムに付加を書けてしまわない為このような挙動になる

	let x = [1,2];
	let y = [...x];//xの値を持ってきたい場合はスプレッド演算子を使用する
	x[0] = 5;
	console.log(x);  //[5,2]
	console.log(y); //[1,2]

}
