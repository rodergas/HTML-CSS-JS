function init(){
	document.myForm.Name.addEventListener("click", replace);
	document.getElementById("submit").addEventListener("click",validate);
}

window.onload = init;

function replace(){
	document.myForm.Name.value ="";
}

function validate(){
	if(document.myForm.Name.value == "" || document.myForm.Name.value == "Your Username"){
		alert("Introdueix un nom");
		document.myForm.Name.focus();
		return false;
	}
	if(document.myForm.Email.value == "" || document.myForm.Email.value == "Your Email"){
		alert("Introdueix un email");
		document.myForm.Email.focus();
		return false;
	}
	if(document.myForm.password.value == "" || document.myForm.password.value == "Your password"){
		alert("Introdueix un password");
		document.myForm.password.focus();
		return false;
	}
	if(document.myForm.Country.value == "-1"){
		alert("Introdueix un pais");
		document.myForm.Country.focus();
		return false;
	}
	alert("T'has registrat correctament :)");
	return true;
}