'use strict';

//カプセル化を理解する
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
	}


	const posts = [
		new Post("JavaScriptの勉強中…"),
		new Post("プログラミング楽しい！"),
	];

	// プロパティは直接操作せずにメソッドを介して操作するようにしてあげる=>カプセル化とも呼ぶ
	posts[0].like();
	// posts[0].show();
	// posts[1].show();

}
