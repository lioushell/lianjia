
/******************二维码扫描页*******************/
/*点击二维码进入游戏规则页*/
$('#codeImg').on('touchstart',function(){
    $("#erWeima").hide();
    $("#play").show();
    $("#gameRule").show();
});

/******************游戏规则页*******************/
/*点击关闭按钮  关闭游戏规则页*/
$('#ruleClose').on('click',function(){
    $("#gameRule").hide();
});

/******************游戏结束结果页*******************/
/*点击再来一次按钮  刷新页面*/
$('.btnAgain').on('click',function(){
    window.location.reload(true);
/*    $("#gameOver").hide();
    $("#resultTips").show();
    $("#tipText1").show();
    $("#tipText2").hide();*/
});

/*点击立即领取按钮  弹出分享好友页*/
$('.btnGetnow').on('click',function(){
    $("#gameOver").hide();
    $("#resultTips").show();
    $("#tipText2").show();
    $("#tipText1").hide();
});

/*点击分享好友按钮  弹出分享好友页*/
$('.btnSharefriend').on('click',function(){
    $("#gameOver").hide();
    $("#shareFriend").show();
});

/******************信息提示页*******************/
/*点击喊朋友一起来按钮  弹出分享好友页*/
$('#btnCallfriend').on('click',function(){
    $("#resultTips").hide();
    $("#shareFriend").show();
});

/*点击关闭按钮  关闭游戏规则页*/
$('#btnFriendclose').on('click',function(){
    $("#resultTips").hide();
});



/*点击浮层遮罩层  关闭该页面*/
$('.mask').on('click',function(){
    $("#shade").hide();
});

$(function () {
    setTimeout(function(){
        $("#loading").hide();
    },3000);
})
