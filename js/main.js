'use strict';


{
	// オブジェクトが複数ある場合を考える
	// 匿名で文章を投稿できるSNSを作成したとする
	// 投稿が複数あるので、まずは配列を作って、その中に文章と言い値を管理するようなオブジェクトを複数入れる
	const posts = [
		{
			text: "JavaScriptの勉強中…",
			likeCount: 0,
		},
		{
			text: "プログラミング楽しい！",
			likeCount: 0,
		}
	];

	// 関数を使用して、postを受け通ったら、そのpostのtextとlikeCountプロパティを表示する

	function show(post){
		console.log(`${post.text} - ${post.likeCount}いいね`);
	}
	show(posts[0]);
}
