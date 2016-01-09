window.onload = nameFieldInit;

function nameFieldInit(){
	if(document.cookie != ""){
		document.getElementById("nameField").innerHTML="hello,"+document.cookie.split("=")[1];//firefox下应如下面console一样
		console.log(document.cookie.split(";")[0].split("=")[1]);
	}
}