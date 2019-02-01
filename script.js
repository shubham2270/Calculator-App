//Grabs the text from history field
const getHistory = () => {
	return document.querySelector('.history').innerText;
}
//Prints text to history field
const printHistory = (num) => {
	document.querySelector('.history').innerText = num;
}
//Grabs the text from result field
const getOutput = () => {
	return document.querySelector('.result').innerText;
}
//Prints text to result field
const printOutput = (num) => {
	if(num =="") {
		document.querySelector('.result').innerText = num;
	} else {
		document.querySelector('.result').innerText = getFormattedNumber(num);
	}

}
//Format the number to have comma
const getFormattedNumber = (num) => {
	let n = Number(num);
	let value = n.toLocaleString('en');
	return value;
}

//Reverse the number format (remove the commas)
const reverseNumberFormat = (num) => {
	return Number(num.replace(/,/g,''));
}

//loops through the list of operators
let operator = document.getElementsByClassName("operator");
// let operator = document.querySelectorAll('.operator'); //Can also do this.
	Array.from(operator).forEach((element, i) => {
		operator[i].addEventListener('click', () => {
		
		})
	});

//loops through the list of numbers
let number = document.getElementsByClassName("number");
	Array.from(number).forEach((element, i) => {
		number[i].addEventListener('click', () => {
			
			console.log(store)
			// printOutput(element.id)
		})
	});