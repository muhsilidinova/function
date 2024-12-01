console.log('Hello word');
console.error('error')
console.warn('warn')
console.info('info')

prompt('Ceнин атын ким?')
 
// переменные ES5 var, ES6 let, const 
// ES - ECMAScript

var name = 'шахида'

console.log(name);

const name = 'Maks'
const age = 25
const hobbi = 'football'

console.log(name);
console.log(age);
console.log(hobby);
 
 const name = prompt('сенин атын ким?')
 const age2 = prompt('жашын канчада?')
 const hobbi2 = prompt('хоббин?')
 
console.log(name);
 console.log(age);
 console.log('hobbi');

 console.log(`менин атым ${name}, жашым ${age}, хоббим ${hobby}`)

alert('Hello Shahida')


// 1
alert(`aзыр эки сан жазып аны кошушун керек`)

const num = prompt(`сан жаз`)  
const num2 = prompt(`дагы сан жаз`)  

alert(Number (num) + parseInt(num2))

// 2
alert(`азыр эки сан жазып аны кемитишин керек`)

const num4 = prompt(`санды жаз`)  
const num5 = prompt(`дагы бир санды жаз`)  

alert(Number (num4) - parseInt(num5))

// 3
alert(`эми эки санды кобойтушун керек`)

const num6 = prompt(`сан жаз`)
const num7 = prompt(`ещё раз напиши`) 

alert(Number (num6) * parseInt(num7))

// 4
alert(`эки санды болушун керек`)

const num8 = prompt(`пиши цифру`) 
const num9 = prompt(`ещё`)  

alert(Number (num8) / parseInt(num9))

