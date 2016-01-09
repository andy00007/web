window.onload = showCookies;
function showCookies(){
	var outMsg = "";

	if(document.cookie == ""){
		outMsg = "there are no cookies";
	}
	else{
		var thisCookies = document.cookie.split(";");

		for(var i=0;i<thisCookies.length;i++){
			outMsg += "cookie name is'"+thisCookies[i].split("=")[0];
			outMsg += "'.and the value is'"+thisCookies[i].split("=")[1]+"'</br>";
		}

	}
	document.getElementById("cookieData").innerHTML = outMsg;
}