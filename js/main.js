'use strict';


{
	// オブジェクトが複数ある場合を考える
	// 匿名で文章を投稿できるSNSを作成したとする
	// 投稿が複数あるので、まずは配列を作って、その中に文章と言い値を管理するようなオブジェクトを複数入れる
	const posts = [
		{
			text: "JavaScriptの勉強中…",
			likeCount: 0,
			// show:function (){
			// 		console.log(`${this.text} - ${this.likeCount}いいね`);
			// 	},
			show(){
					console.log(`${this.text} - ${this.likeCount}いいね`);
				},
				
			},
			{
				text: "プログラミング楽しい！",
				likeCount: 0,
				show(){
						console.log(`${this.text} - ${this.likeCount}いいね`);
					},
			}
	];

	// メソッド（オブジェクトの値が関数の時の呼び名）の時の呼び出し方
	posts[0].show();
	// ただし、この記法だと、オブジェクト内に同じ処理の関数を必ず含めないといけない
	posts[1].show();
}
