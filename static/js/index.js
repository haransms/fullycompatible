$(function(){
	var scrtime;
	$(".notice_div").hover(function(){
		 clearInterval(scrtime);
	},function(){
		scrtime = setInterval(function(){
				var ul = $(".notice_div ul");
				var liHeight = ul.find("li:last").height();
				ul.animate({marginTop : liHeight+5+"px"},1000,function(){
					ul.find("li:last").prependTo(ul)
					ul.find("li:first").hide();
					ul.css({marginTop:5});
					ul.find("li:first").fadeIn(1000);
				});		
		},3000);
	}).trigger("mouseleave");

    $('.column_box .grid_13').each(function(index,element){
        if(index%3 == 1 || index%3 == 0){
            $(this).addClass('column_content');
        }else{
            $(this).addClass('column_content_right');
        }
    });
});