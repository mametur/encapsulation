'use strict';

// this one is extra tricky

const obj = {
	current: 0,

	method: function (boundArg, freeArg) {
		let result = 0;
		result = this.current - (boundArg + freeArg);
		this.current = this.current + boundArg + freeArg;

		return result;
	},
};

// don't change the code below this line
const boundMethod = obj.method.bind(obj, -1);

const test0 = obj.current === 0;
console.assert(test0, 'Test 0');

const result1 = boundMethod(3);
const test1a = obj.current === 2; // 3-1 =2
const test1b = result1 === -2;
console.assert(test1a, 'Test 1.A');
console.assert(test1b, 'Test 1.B');

const result2 = boundMethod(2); // 2 + 2-1 =3
const test2a = obj.current === 3;
const test2b = result2 === 1;
console.assert(test2a, 'Test 2.A');
console.assert(test2b, 'Test 2.B');

const result3 = boundMethod(1); // 3 1 -1
const test3a = obj.current === 3;
const test3b = result3 === 3;
console.assert(test3a, 'Test 3.A');
console.assert(test3b, 'Test 3.B');
