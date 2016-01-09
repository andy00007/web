var thisImage = 5;         //初始化，设初值为最后一张，进入页面后，从第一张开始
window.onload = rotate();  //页面加载完了以后调用函数

function rotate(){
	var preImage= (thisImage++);//先赋值后执行加1操作，这样preImage才是当前图片的前一张
	if(preImage == 5){
		thisImage = 0;
	}
	var newImage = new Image();    
	newImage.src = "images/banner"+thisImage+".jpg";

	document.getElementById("adBanner").src = newImage.src;
	document.getElementById(preImage).className = "";       //前一页的圆圈改变样式
	document.getElementById(thisImage).className = "thisBox";//当前页圆圈的样式

	var liTag = document.getElementsByTagName('LI');
	for(var i=0;i<liTag.length;i++){
		if(liTag[i].parentNode.className == "smallBox"){    //找到圆圈的节点
			liTag[i].onmouseover = function(){
				preImage = thisImage;
				thisImage = this.id;
				newImage.src = "images/banner"+thisImage+".jpg";

				document.getElementById("adBanner").src = newImage.src;
				document.getElementById(preImage).className = "";
				document.getElementById(thisImage).className = "thisBox";
			}
		}
	}
	setTimeout(rotate,3000);

}