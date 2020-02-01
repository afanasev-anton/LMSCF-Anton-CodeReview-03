//create event for a button
var button = document.getElementById("calc");
button.addEventListener ('click',calculateInsurance);
//event function
function calculateInsurance(){
	var age = parseInt(document.getElementById("age").value);
	var country = document.getElementById("country").value;
	var hp = parseInt(document.getElementById("horsep").value);
	var nam = document.getElementById("yname").value;
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
			var ins = Math.round(hp*100/age + 50);
			out.innerHTML = "<p>" + nam + " , your insurance costs " + ins + "€</p>";
    		break;
    		case "hungary":
    		var ins = Math.round(hp*120/age + 100);
    		out.innerHTML = "<p>" + nam + " , your insurance costs " + ins + "€</p>";
    		break;
    		case "greece":
    		var ins = Math.round(hp*150/(age+3) + 50);
    		out.innerHTML = "<p>" + nam + " , your insurance costs " + ins + "€</p>";
    		break;
    		default:
    		var ins = "Something gone wrong - check information";
    		out.innerHTML = "<p>" + ins + "</p>";
    	}
	}
}
//For Austria : insurance = horse_power x 100 / age   + 50;
//For Hungary: insurance = horse_power x 120 / age  + 100;
//For Greece: insurance = horse_power x 150 / (age+3)  + 50;
//test function
var a = 33;
var h_p = 250;
var count = "austria";
function calculateInsurancePerCountry(horse_power, age, country) {
	switch(country) {
		case "austria":
			var ins = Math.round(horse_power*100/age + 50);			
    	break;
    	case "hungary":
    		var ins = Math.round(horse_power*120/age + 100);
    	break;
    	case "greece":
    		var ins = Math.round(horse_power*150/(age+3) + 50);
    	break;
    }
    return ins;
}
console.log(a);
console.log(h_p);
console.log(count);
console.log("insurance costs " + calculateInsurancePerCountry(h_p,a,count) + "€");