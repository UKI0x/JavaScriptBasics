'use strict';


{
	//クラスを作成してみる
	class Post {
		constructor(text) {
			this.text = text;
			this.likeCount = 0;		
			}

			show(){
				console.log(`${this.text} - ${this.likeCount}いいね`);
			}
	}


	const posts = [
		new Post("JavaScriptの勉強中…"),
		new Post("プログラミング楽しい！"),
	];

	// メソッド（オブジェクトの値が関数の時の呼び名）の時の呼び出し方
	posts[0].show();
	// ただし、この記法だと、オブジェクト内に同じ処理の関数を必ず含めないといけない
	posts[1].show();
}
