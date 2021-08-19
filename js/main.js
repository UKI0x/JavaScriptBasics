'use strict';

	console.log('5' * 3);
	console.log('5' - 3);
	console.log(parseInt('5',10) + 3);
	console.log(parseInt('hello',10));

	// false として評価される値は 0 、 null 、 undefined 、空文字列、そして真偽値の false 自体になります。
	console.log(Boolean(0));
	console.log(Boolean("hello"));

	const score = 70;

	// score >= 80 ? console.log('Great!'):console.log("OK...");

	const name = "taguchi";

	if(score >= 50){
		if(name === "taguchi"){
			console.log("Good job!");
		}
	}

	// 論理演算子を使ったif文
	if(score >=50 && name === "taguchi"){
		console.log("Good job!");
	}


	// swich文
	const signal = "pink";

	switch(signal){
		case "red":
			console.log("stop!");
			break;
		case "yellow":
			console.log("Caution!");
			break;
		case "bule":
		case "green":
			console.log("Go!");
			break;
		default:
			console.log("Worng signal!");
			break;
	}
