window.onload = initWindows;

function initWindows(){
	if(document.getElementById("childField")){
		document.getElementById("childField").onchange=updateParent;
	}
	else{
		newWindow = window.open("child.html","newWin","status=yes,width=300,height=300");
	}

	var allTags = document.getElementsByTagName("*");
	for(var i=0;i<allTags.length;i++){
		var allClasses = allTags[i].className.split(" ");
		console.log(allClasses);
	}
}
function updateParent(){
	console.log(this.value);
	opener.document.getElementById("msgLine").value="hello "+this.value+" !";
}