'use strict';

//静的メソッドを使ってみよう
{
	class Post {
		constructor(text) {
			this.text = text;
			this.likeCount = 0;		
			}

			show(){
				console.log(`${this.text} - ${this.likeCount}like`);
			}

			like() {
				this.likeCount++;
				this.show();
			}

			// 静的メソッド　インスタンスを介さずに直接クラスから呼び出すメソッドを定義する
			// オブジェクトのインスタンスとは関係がないけど、投稿に関する機能を作成したい場合に便利
			// プロパティやメソッド違い、静的メソッドはthisが使用できない
			// クラス内で使われるthisはクラスから作られるインスタンスのため、静的メソッドではインスタンスを作らずに呼び出す為thisは使用できない
			static showInfo() {
				console.log("post class version 1.0")
			}

	}


	const posts = [
		new Post("JavaScriptの勉強中…"),
		new Post("プログラミング楽しい！"),
	];

	// 今までメソッドはインスタンスから呼び出しを行っていた
	// posts[0].like();

	Post.showInfo();


}
