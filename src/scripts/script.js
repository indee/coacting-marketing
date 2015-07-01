jQuery(document).ready(function( $ ) {
	$(".vc_row").each(function(){
		$(this).find(".wpb_column").wrapAll("<div class='vcInner'></div>");
	});
});
