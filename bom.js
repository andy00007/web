/*
	IE,Safari,Opera and Chrome support ScreenLeft,ScreenTop. but Firefox support ScreenX  
	display the distance of the browser window offset screen
*/
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop: window.screenY;
window.moveTo(0,0);
console.log(leftPos,topPos);

/*页面视口的大小*/
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

if(typeof pageWidth != "number") {
	if(document.compatMode == "CSS1Compat") {     //标准模式
		pageWidth = document.documentElement.clientWidth;
		pageHeight = document.documentElement.clientHeight;
	}else {
		pageWidth = document.body.clientWidth;
		pageHeight = document.body.clientHeight;
	}
}

/*
	在实际开发模式下很少使用间歇调用，原因是后一个间歇调用会在前一个间歇调用之前启动
	使用下面这种超时调用来模拟则可以避免这一点
*/
var num = 0;
var max = 10;
function incrementNumber() {
 	num++;
 	if(num<max) {
 		setTimeout(incrementNumber,1000);
 	}else {
 		console.log("end");
 	}
}

setTimeout(incrementNumber,1000);
console.log(window.navigator);