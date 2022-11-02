var capitalize = document.getElementById("capitalize");
var clear = document.getElementById("clear");

submit.onclick = function(){
	var name = document.getElementById("name").value;
  var city = document.getElementById("city").value;
  
  document.getElementById("outputName").innerText = name;
  document.getElementById("outputCity").innerText = city;
}

capitalize.onclick = function(){
	var name = document.getElementById("name").value;
  var city = document.getElementById("city").value;
  
  document.getElementById("name").value = name.toUpperCase();
  document.getElementById("city").value = city.toUpperCase();
}

clear.onclick = function(){
	document.getElementById("name").value = "";
  document.getElementById("city").value = "";
}