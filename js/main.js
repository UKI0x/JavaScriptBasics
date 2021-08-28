'use strict';


{
	//配列の要素を文字列として結合するための命令
	const d = [2019, 11, 14];
	// 引数には結合する文字列を記入する 何も入れたくない場合は空文字でもOK
	console.log(d.join("/")); //2019/11/14
	console.log(d.join(""));

	// joinとは逆に、文字列を区切り文字の所で分割して、配列にしたい場合　split()

	const t = "17:08:24";
	console.log(t.split(":"));

	// 分割代入
	const [hour, minute, second ] = t.split(":");
	console.log(hour);
	console.log(minute);
	console.log(second);
}
