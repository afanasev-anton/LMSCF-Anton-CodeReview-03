//create thumbnail of team members with info in team.html
for (var i = 0; i < teamMembers.length; i++) {
	var tm = teamMembers[i];
	console.log(tm)
	//add thumbs to html
	var person = document.createElement("DIV");
	person.className = "person";	
	person.id = tm.image;
	document.getElementById("team").appendChild(person);	
	//img for thumbs
	var pic = document.createElement("IMG");
	pic.setAttribute("src",tm.image);
	person.appendChild(pic);
	//name for thumbs
	var personName = document.createElement("DIV");
	personName.innerText = tm.name;
	personName.className = "person-name";
	personName.id = "nam-"+tm.image;
	person.appendChild(personName);
	
	//hidden block for description
	var description = document.createElement("DIV");
	description.className = "person-description";
	description.id = "des-" + tm.image;
	console.log(description.id);
	description.style.width = "200px";
	description.style.height = "300px";
	description.style.display = "none";
	description.innerHTML = "<p>To contact me:<br><br>" + tm.fullname + "<br><br>" + tm.email + "</p>"; 
	person.appendChild(description);
}
//create buttons and event for them
var buttons = document.getElementsByClassName("person");
for (let i = 0; i < buttons.length; i++) {
	console.log(buttons[i].id);	
	buttons[i].addEventListener("click",function(){addDescription(buttons[i].id)});
}
function addDescription (val){
	var oldDes = document.getElementsByClassName("person-description");
	var oldPer = document.getElementsByClassName("person");
	var oldNam = document.getElementsByClassName("person-name");
	for (var i = 0; i < oldDes.length; i++) {
		oldDes[i].style.display = "none";
		oldPer[i].style.height = "200px";
		oldPer[i].style.width = "200px";
		oldPer[i].style.borderRadius = "50%";
		oldNam[i].style.display = "block";
	}
	document.getElementById("nam-"+val).style.display = "none";
	document.getElementById(val).style.height = "300px";
	document.getElementById(val).style.width = "650px";
	document.getElementById(val).style.borderRadius = "8px";
	document.getElementById("des-"+val).style.display = "block";
}