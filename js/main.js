'use strict';

	function showAd(message = 'Ad') {
		console.log("---------------");
		console.log(`------${message}-------`);
		console.log("---------------");
	}

	showAd();
	console.log("test");
	showAd();
	console.log("test");

	// 関数でまとめると変更に強くなる。同じ処理をまとめて、同じコードを複数回書かなくても良くなる


	showAd("Header Ad");
	showAd();
	showAd("Footer Ad");


	// function sum(a, b, c) {
	// 	// console.log(a + b + c);
	// 	return a + b + c;
	// }

	// // sum(1,2,3);
	// // sum(3,4,5);

	// const total = sum(1,2,3) + sum(3,4,5);
	// console.log(total);

	// 関数式
	const sum = function(a, b, c) {
		// console.log(a + b + c);
		return a + b + c;
	};

	const total = sum(1,2,3) + sum(3,4,5);
	console.log(total);
