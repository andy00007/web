window.onload = function() {
	console.log(inputSupportsType("range"));
	console.log(inputSupportsType("date"));
	console.log(typeSupport("input","type","range"))
	console.log(typeSupport("input","type","date"))
}
/*检测输入框的type属性是否有某个属性值*/
function inputSupportsType(type) {
	if(!document.createElement) return false;
	var input = document.createElement("input");
	input.setAttribute('type',type);
	if(input.type == 'text' && type != 'text') {
		return false;
	} else {
		return true;
	}
}
/*检测元素节点elementName是否有属性attribute*/
function attrbuteSupport(elementName,attribute) {
	if(!document.createElement) return false;
	var element = document.createElement(elementName);
	return(attribute in element);
}

function typeSupport(element,attr,type) {
	if(!document.createElement) return false;
	var element = document.createElement(element);
	element.setAttribute(attr,type);
	if(element[attr] != type) {
		return false;
	}else {
		return true;
	}
}


