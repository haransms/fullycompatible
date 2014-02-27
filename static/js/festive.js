//设置cookie
function SetCookie(name,value){
	var exp = new Date(); 
	exp.setTime(exp.getTime() + 1*60*60*1000);//有效期1小时
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
//取cookies函数
function getCookie(name){
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	if(arr != null) return unescape(arr[2]); return null;
}

$(function(){
	if(getCookie("mainbg")==0){
		$("body,html").css("background","none");
		$("#close_btn").hide();
		$("#Festive").hide();
	}else{
		$(".wrap_box").css("background","none");
		$("body").css("background","url(static/images/top_back2.jpg) no-repeat 50% 0");
		$("html").css("background","url(static/images/html_bg.jpg) repeat-x 0 0");
		$("#close_btn").show().css("background","url(static/images/close_btn.jpg) no-repeat");
	}
	
	$("#close_btn").click(function(){
		$("body,html").css("background","none");
		$("#close_btn").hide();
		$("#Festive").hide();
		SetCookie("mainbg","0");
	});
});