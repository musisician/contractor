// JavaScript Document
function getJSON(idForm){
	var formData = JSON.stringify($(idForm).serialize());
	var str = String(formData);
	console.log(formData);
	str = str.replace(/=/gi, '":"');
	str = str.replace(/&/gi, '","');
	str = str.replace(/\+/gi, " ");
	str = "{" + str + "}";
	console.log(str);
	alert(str);
}