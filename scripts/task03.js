'use strict'

const option = prompt('введите "even" или "odd"');
let n = prompt('параметр перый');
let m = prompt('параметр второй');
const s = prompt('введите количество чисел');

const createArray = (s, n, m) => Array.from({ length: s }, () => Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m));

const arrResult = createArray(s, n, m);

const data = arrResult;

const getNumbersByParity = (data, parity) => {
	let even = [];
	let odd = [];

	for (let i = 0; i < data.length; i++) {
		if (data[i] % 2 == 0) {
			even.push(data[i]);
		} else {
			odd.push(data[i]);
		}
	}

	// if (parity === 'even') {
	// 	return even;
	// } else if (parity === 'odd') {
	// 	return odd;
	// } else {
	// 	console.log('укажите "even" или "odd"');
	// }

	if (parity === 'even') {
		return even;
	} else {
		return odd;
	}
};


console.log(arrResult);
console.log(getNumbersByParity(data));


