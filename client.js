
function nextFact(factNum){
	var fact = "";

	switch (factNum){
	case 1: 
		fact = "The hottest temperature ever recorded on Earth was 2 billion degrees kelvin!";
		break;
	case 2: 
		fact = "High heels were originally worn by men!";
		break;
	case 3: 
		fact = "Queen Elizabeth II is a trained mechanic!";
		break;
	case 4: 
		fact = "Kleenex tissues were originally designed as gas masks filters!";
		break;
	case 5: 
		fact = "Space smells like seared steak!";
		break;
	default:
		console.log("what");
	}
	
	document.getElementById("fact").style.display = "block";
	document.getElementById("fact").innerHTML = fact;
	document.getElementById("image").src = "images/" + factNum + ".png";
}