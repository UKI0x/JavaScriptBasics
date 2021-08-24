'use strict';


{
	// Filter()
	// 配列の要素をチェックして、条件に合うものだけを抽出して、別の配列として取得することができる

	const numbers = [1, 4, 7, 8, 10];

	// 偶数の要素だけ別の配列として抽出する
	// const evenNumbers = numbers.filter((number)=>{
	// 	if(number % 2 === 0){
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// });

	上記の書き方はこのように短く記述することもできる
	const evenNumbers = numbers.filter(number => number % 2 === 0);

	console.log(evenNumbers);//[4,8,10]
}

