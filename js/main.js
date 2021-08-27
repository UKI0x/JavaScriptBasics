'use strict';


{
	// オブジェクトのプロパティを列挙したいときに、forEachがオブジェクトには使えないので、いくつかの手順を踏む必要がある

	const point = {
		x: 100,
		y: 180,
	};


	// Object.keys(point)とすると、pointのすべてのキーを配列で取得できるので、それをkeysという定数にまずは入れる
	// そうすると、キーが配列で取得できて、配列にはforEach()が使えるので、それを使っていく
	const keys = Object.keys(point);

	console.log(point);
	console.log(keys);
	keys.forEach(key => {
		console.log(`key : ${key} Value: ${point[key]}`);
	});

	const points = [
		{x:30, y: 20},
		{x:10, y: 50},
		{x:40, y: 40},
	];
	console.log(points[1].y);
}
