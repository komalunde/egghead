var step = 4;
var $uni = $('.rainbow');
var txt = $uni.text();
var len = txt.length;
var lev = 360 / len;
var newCont = "";
var itv;

for (var i = 0; i < len; i++) {
	newCont += "<span style='color:hsl(" + i * lev + ", 100%, 50%)'>" + txt.charAt(i) + "</span>";
}

$uni.html(newCont);

itv = setInterval(function() {
	$uni.find('span').each(function() {
		var h = +$(this).attr('style').split(',')[0].split('(')[1] - step % 360;
		$(this).attr({
			style: "color:hsl(" + h + ", 100%, 50%)"
		});
	});
}, 50);
