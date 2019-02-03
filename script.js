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
	if(num == '-') {
		return '';
	}
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
			if(element.id == 'clear') {
				printHistory('');
				printOutput('');
			}
			else if (element.id == 'backspace'){
				let output = reverseNumberFormat(getOutput()).toString();
				if(output) { //if output has a value;
					output = output.substring(0, output.length - 1);
					printOutput(output);
				}
			} else {
				let output = getOutput();
				let history = getHistory();
				if(output == "" && history != "") {
					if(isNaN(history[history.length-1])) {
						history = history.substring(0, history.length - 1);
					}
				}
				if(output != "" || history != ""){
					//condition?true:false
					output = output==""? 
					output: reverseNumberFormat(output);
					history = history + output;
					if(element.id == '='){
						let result = eval(history);
						printOutput(result);
						printHistory("");
					} else {
						history = history + element.id;
						printHistory(history);
						printOutput('');
					}
				}
			}
		})
	});

//loops through the list of numbers
let number = document.getElementsByClassName("number");
	Array.from(number).forEach((element, i) => {
		number[i].addEventListener('click', () => {
			let output = reverseNumberFormat(getOutput());
			if(output != NaN) { //if output is a number
				output = output + element.id;
				printOutput(output);
			}
		})
	});