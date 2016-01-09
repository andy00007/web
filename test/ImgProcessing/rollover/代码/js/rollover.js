window.onload = rolloverInit;

function rolloverInit(){
	for(var i=0;i<document.images.length;i++){         //检查页面上所有的图片的父节点是不是A标签
		if(document.images[i].parentNode.tagName == "A"){   //w3c标准，所有的标签为小写。但是tagName总是返回大写
			setRollover(document.images[i]);
		}
	}
}

function setRollover(thisImage)
{
	thisImage.outImage = new Image();          //给Image对象添加了一个outImage属性，定义为鼠标移开时的图像版本
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout = function(){         //匿名函数（即没有名字的函数）
		this.src = this.outImage.src;
	}

	thisImage.overImage = new Image();
	thisImage.overImage.src = "image/"+thisImage.id+"_mouse_on.jpg";
	thisImage.onmouseover = function(){
		this.src = this.overImage.src;
	}
}