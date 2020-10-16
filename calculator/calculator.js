function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}

function sum (array) {
	var summ = 0;
	for (num in array){
		summ += array[num];
	}
	return summ;
}

function multiply (array) {
	var tot = 1;
	for (num in array){
		tot *= array[num];
	}
	return tot;
}

function power(a, b) {
	return Math.pow(a, b)
}

function factorial(a) {
	if(a == 0 || a == 1)
		return 1;
	return a*factorial(a-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}