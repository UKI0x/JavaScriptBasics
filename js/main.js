'use strict';


{
	// 現在日時を表示
	const d =  new Date();
	console.log(d);

	// 年月日で指定したい場合
	// 年　getFullYear()を使用する
	// 月　　getMonth() 0-11が返されるので+1をする
	// 日付　getDate() 1-31の数値が取得される
	// 曜日 getDay() 日付と混同しがちなので注意　0-6の数値で返される 1が月曜日
	// getHours() で時間、 getMinutes() で分、 getSeconds() で秒、 getMilliseconds() でミリ秒


	// 何月何日と表示したい場合※現時刻が表示される
	console.log(`${d.getMonth()+1}月 ${d.getDate()}日`);

	// 特定の日時を表す値を作りたいとき　引数に年月日などを渡してあげる
	const t = new Date(2019,10) //2019/11/01
	// 後から日付を操作したい場合setで始まる命令を作ってあげる
	// 例：同じ日付の10時にしたい場合　複数の引数を渡すと小さい単位までセットできる
	t.setHours(10,20,30);
	// 仮にその月が30日までしない月で、31と指定した場合（範囲を超える値を与える）と自動的に補正してくれる
	t.setDate(31);　//2019/12/1となる
	// 日時計算
	t.setDate(t.getDate() +3);
	console.log(t);
}
