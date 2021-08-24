'use strict';


{
	// お絵描きアプリ等でX座標とY座標を管理したい場合
	// const point = [100, 180];

	// それぞれの値に名前が付いていた方が分かりやすいのでオブジェクト記法でまとめる
	const point = {
		x:100,
		y:180,
	};
	// オブジェクトの最後の,は付けてもつけなくてもエラーにはなりません
	// ただ、ここに , があると全ての行が同じ形式になって追加や削除、入れ替えがしやすくなるので今回は付けておきましょう。

	console.log(point);

	// オブジェクトのプロパティにアクセスする方法2種類

	point.x = 120;
	// point["x"] = 120;

	// プロパティを追加したい場合
	point.z = 90;

	// プロパティを削除したい場合
	delete point.y;

	console.log(point.x);
	console.log(point["y"]);
	console.log(point);


}
