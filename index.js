function checkinfo() {
	console.log("Le formulaire a été soumis!");

	validatefirstname();
	validatelastname();
	validateemail();
	validatelottonumbers();
	lottogame();
};

function validatefirstname() {
	var inputfirstname = document.forms["form"]["firstname"].value;
	if (inputfirstname == "")
	{
		alert("Veuillez fournir un prénom");
		return false;
	};
};

function	validatelastname() {
	var inputlastname = document.forms["form"]["lastname"].value;
	if (inputlastname == "")
	{
		alert("Veuillez fournir un nom");
		return false;
	};
};

function checkEmail(email) {
	const regexemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regexemail.test(String(email).toLowerCase());
};

function validateemail() {
	var inputemail = document.forms["form"]["email"].value;
	if (inputemail == "")
	{
	alert("Veuillez fournir un email");
	return false;
	}
	else if (checkEmail(inputemail) == false)
	{
	alert("L'email fourni n'est pas correct");
	return false;
	};
};

function validatelottonumbers() {
	for (i = 1; i < 7; i++) {
		let inputlottonumber = document.forms["form"]["lottonumbers"+i].value;
		if (inputlottonumber == ""){
			alert("choisissez un nombre entre 1 et 10")
			return false;
		};
	};
};

function comparelottonumbers(array1,array2) {
		for(var i=0; i<7; i++) 
		if(array1[i]!= array2[i])
		{
		return false
		}  
		return true;
};

function lottogame() {
	let inputlotto = Array();
	inputlotto = [
		document.forms["form"]["lottonumbers1"].value, 
		document.forms["form"]["lottonumbers2"].value, 
		document.forms["form"]["lottonumbers3"].value, 
		document.forms["form"]["lottonumbers4"].value, 
		document.forms["form"]["lottonumbers5"].value, 
		document.forms["form"]["lottonumbers6"].value
	];
	
	let winnignumbers = Array();
	winnignumbers = [
		Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), 
		Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), 
		Math.floor(Math.random() * 10), 
		Math.floor(Math.random() * 10),
	];

	let simplewinningnumbers = Array();
	simplewinningnumbers = [1,2,3,4,5,6];

	if (comparelottonumbers(simplewinningnumbers,inputlotto) == true) 
	{
		console.log(comparelottonumbers(simplewinningnumbers,inputlotto))
		alert(`Bravo vous avez gagnez 1 Millions de $$$ ! avec les numéros suivants : ${simplewinningnumbers}`);
	}
	else
	{
		console.log(comparelottonumbers(simplewinningnumbers,inputlotto))
		alert(`Vous avez perdus!!! honte sur vous!!! les numéros gagnants étaient: ${simplewinningnumbers}`);
	};
};