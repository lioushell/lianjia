function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShare(score);
	Play68.shareFriend();
	//setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(score) {
	var descContent = "#圣诞砍树#";
	if(score){
		shareTitle = '我在链家拆了'+score+'块砖，是不是6翻了？';
	}else{
		shareTitle = "原来圣诞老人不来送礼物就在干这个！我也是醉了...";
	}
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
	document.title = shareTitle;
}
