'use strict';
console.log('Here\'s a hidden message');

// Start date code here.
let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

function nameUpperCase() {
	var x = document.getElementById('fname');
	x.value = x.value.toUpperCase();
}