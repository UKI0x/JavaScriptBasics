'use strict';

{
	// map 配列に何らかの処理をして、その結果を別の配列として取得したい場合
	const prices = [180,190,200];

	// それぞれ20円値上げした結果を配列で出力したい
	// const updatedPrices = prices.map((price)=>{
	// 	return price + 20;

	const updatedPrices = prices.map(price=> price + 20);
	console.log(updatedPrices);
}

