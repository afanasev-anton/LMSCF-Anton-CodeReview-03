var button = document.getElementById("calc");
button.addEventListener ('click',calculateInsurance);

function calculateInsurance(){
	var age = parseInt(document.getElementById("age").value);
	var country = document.getElementById("country").value;
	var hp = parseInt(document.getElementById("horsep").value);
	var nam = document.getElementById("yname").value;
	//var ins = "printed calculation goes here";
	var out = document.getElementById("output");
	out.removeChild(out.childNodes[0]);
	if (isNaN(age)) {
		alert("Age should be a number");
		document.getElementById("age").reset();
	} else if (isNaN(hp)) {
		alert("Horsepower should be a number");
		document.getElementById("horsep").reset();
	} else {
		switch(country) {
			case "austria":
			var ins = hp*100/age + 50;
			out.innerHTML = "<p>" + nam + " , your insurance costs " + Math.round(ins) + "€</p>";
			console.log(age);
    		console.log(hp);
    		console.log(country);
    		console.log(ins);
			// code block
    		break;
    		case "hungary":
    		var ins = hp*120/age + 100;
    		out.innerHTML = "<p>" + nam + " , your insurance costs " + Math.round(ins) + "€</p>";
    		console.log(age);
    		console.log(hp);
    		console.log(country);
    		console.log(ins);
    		// code block
    		break;
    		case "greece":
    		var ins = hp*150/(age+3) + 50;
    		out.innerHTML = "<p>" + nam + " , your insurance costs " + Math.round(ins) + "€</p>";
    		break;
    		default:
    		console.log(age);
    		console.log(hp);
    		console.log(country);
    		console.log(ins);
    		var ins = "Something gone wrong - check information";
    		out.innerHTML = "<p>" + ins + "</p>";
    	}
	}
}
//For Austria : insurance = horse_power x 100 / age   + 50;
//For Hungary: insurance = horse_power x 120 / age  + 100;
//For Greece: insurance = horse_power x 150 / (age+3)  + 50;

