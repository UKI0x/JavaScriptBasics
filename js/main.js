'use strict';


{
	// スプレッド構文でオブジェクトの展開を行う
	const otherProps = {
		r: 4,
		color:"red",
	};

	// スプレッド構文で他のオブジェクトのプロパティを追加する
	const point = {
		x:100,
		y:180,
		...otherProps,
	};


	// console.log(point);


	// 分割代入とレスト構文もオブジェクトに対して使用することができる
	// const {} として point を代入するのですが、こちらにオブジェクトのキーと同じ定数名を使ってあげれば、そのキーの値が代入されるという仕組みになっています。
	const {x,r, ...others} = point;
	console.log(x);
	console.log(r);
	console.log(others);
}
