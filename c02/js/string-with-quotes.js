
var title;	// creates new variable called title
var message; // creates new variable called message
title = "Marta`s Special Offers"; // assigns value to title
message = "<a href=\"sale.html\">25% off!</a>"; // assigns value to mesaage (using \to escape quotation marks so they become part of the value)

var elTitle = document.getElementById("title"); // get element to change
elTitle.innerHTML = title; // use innerHTML to put value in element
var elNote = document.getElementById("note"); // get element to change
elNote.innerHTML = message; // use innerHTML to put value in element

