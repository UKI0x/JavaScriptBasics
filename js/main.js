'use strict';

//クラスを継承する
{
	class Post {//親クラス
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
	// Postクラスと同じメソッドを引き継ぐ場合　extends クラス名と指定すると、指定されたクラスを継承できる
	class SponsoredPost extends Post{ //子クラス
		constructor(text, sponsor) {
			// 子クラスのconstructorでthisを使うには、最初にsupre()と指定する
			super(text);
			this.sponsor = sponsor;
			}

			show(){
				super.show();
				console.log(`... sponsord by ${this.sponsor}`);
			}

	}


	const posts = [
		new Post("JavaScriptの勉強中…"),
		new Post("プログラミング楽しい！"),
		new SponsoredPost("3分動画でマスターしよう", "dotinstall"),
	];

	posts[2].show();
	posts[2].like();
}
