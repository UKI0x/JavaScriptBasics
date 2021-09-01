'use strict';


{
	// 例外処理
	// 例：ユーザーから名前を受け取って、それを大文字にする処理

	const name = 123;
	//大文字に変換するには　toUpperCase()という命令を使用する ※ただし、文字列にしか使用できない
	// 例えば定数nameに数値が入ってエラーになったとしても処理を止めたくない場合、例外処理を使用する
	try{
		console.log(name.toUpperCase());
	} catch(e) {
		console.log(e);
	}
	console.log("Finish!");
}
