var timer;
var i = 0;
var speed = 5000;
function addFavorite() {
	if(document.all) {
		try {
				window.external.addFavorite(window.location.href, document.title);
		} catch(e) {
				alert("?????ղ?ʧ?ܣ???ʹ??Ctrl+D????????");
		}
	} else if(window.sidebar) {
		window.sidebar.addPanel(document.title, window.location.href, "");
	} else {
		alert("?????ղ?ʧ?ܣ???ʹ??Ctrl+D????????");
	}
 }
function setHomepage() {
	if(document.all) {
		document.body.style.behavior = 'url(#default#homepage)';
		document.body.setHomePage(window.location.href);
	} else if(window.sidebar) {
		if(window.netscape) {
			try {
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			} catch(e) {
					alert("?ò????????????ܾ????????????øù??ܣ????ڵ?ַ???????? about:config,Ȼ?????? signed.applets.codebase_principal_support ֵ??Ϊtrue");
			}
		}
		var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
		prefs.setCharPref('browser.startup.homepage', window.location.href);
	} else {
		alert('????????????֧???Զ??Զ???????ҳ, ??ʹ?????????˵??ֶ?????!');
	}
}
function direct () {
	window.clearInterval(timer); /*??????ʱ??*/
	timer = window.setInterval("slider()", speed); /*??ʱ??*/
}
function slider () {
	if(i>5){
		i=0;
	}
	$('.focus_pic li').eq(i).addClass('hover').siblings().removeClass('hover');
	$('.slider_title a').eq(i).show().siblings('a').hide();
	$('.slider_img li').eq(i).fadeIn().siblings('li').fadeOut();
	i++;
}
$(function(){
	$(".lazy").lazyload();
	direct();

	$('.focus_pic li').hover(function(){
		window.clearInterval(timer);
		// var backColor = $(this).find('img').attr('backColor');
		// $('#slider_background').css({background : backColor});
		$(this).addClass('hover').siblings().removeClass('hover');
		i = $(this).index();
		$('.slider_title a').eq(i).show().siblings('a').hide();
		$('.slider_img li').eq(i).fadeIn().siblings('li').fadeOut();
	});

	$('.focus_pic li').mouseleave(function(){
		direct();
	});
})