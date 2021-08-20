'use strict';

// スコープ
	const x = 2;
	// ブロックの中（｛｝）で定義された定数や変数はブロック内でしか使用されない＝スコープが効いているから
	function f() {
		// const x = 1;
		console.log(x);
	}


	
	f();

	console.log(x);
