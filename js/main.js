'use strict';


{
	// 警告や確認のダイアログを表示する方法

	// 警告 alertの引数に表示したい文字列を渡してあげる
	// お知らせを出すとき等に便利
	alert("hello");

	// ユーザーに確認を求める confirm alertと違い選択肢（キャンセル・OK）がある
	const answer = confirm("削除しますか?");

	console.log(answer);

	// confirmで出された確認ダイアログでどちらのボタンを押されたかでtrue/false（ブール値）が返ってくるのでif文でその後の処理を分ける
	if(answer) {
		console.log("削除しました");
	}else {
		console.log("キャンセルしました");
	}
}
