// let h1 = document.getElementById('heading');
// console.log(h1);
// let p = document.getElementsByTagName('p');
// console.log(p); // Trả về HTML collection, không phải Array
// let para = document.getElementsByTagName('p')[0];
// console.log(para);
// let paraClassName = document.getElementsByClassName('para'); // Trả về HTML collection, không phải Array
// console.log(paraClassName);
// let h1Selector = document.querySelector('#heading');
// console.log(h1Selector);
// let paraSelector = document.querySelector('.para'); //First CSS Selector found
// console.log(paraSelector);
// let paraSelectorAll = document.querySelectorAll('p');
// console.log(paraSelectorAll);
// let box = document.querySelector('.box');
// let paraOfbox = box.querySelectorAll('.para');
// console.log(paraOfbox);

let box = document.querySelector('.box');
box.style.backgroundColor = 'orange';
console.log(box.parentNode);
console.log(box.childNodes);
console.log(box.children);
console.log(box.firstChild);
console.log(box.firstElementChild);
console.log(box.nextSibling);
console.log(box.previousElementSibling);

//Phương thức Get/set nội dung cho phần tử HTML
//Get Nội dung
let h1 = document.getElementById('heading');
console.log(h1.innerText);
console.log(h1.textContent);
console.log(h1.innerHTML);

//Set Nội dung
let h2 = document.querySelector('h2');
h2.textContent = 'New Paragraph';
h2.innerText = 'Another Paragraph';
h2.innerHTML = '<input placeholder = "Insert Name">';

let para = document.createElement('p');
document.body.prepend(para);
para.innerText = 'This is new para added by body prepend';
box.appendChild(para); //1 node chỉ có 1 vị trí 
let para2 = document.createElement('p');
document.body.prepend(para2);
para2.textContent = 'new Para 2 prepend by body';
let para3 = document.createElement('p');
para3.innerText = 'added by insertBefore Reference Node';
box.insertBefore(para3, para);
let a = document.createElement('a');
a.href = 'https://facebook.com';
a.target = '_blank';
a.innerText = 'facebook';
box.prepend(a);

//Insert adjacent HTML
let para4 = document.createElement('p');
let para5 = document.createElement('p')
para4.textContent = 'abc';
para5.innerText = 'newABC';
box.insertAdjacentElement('beforeBegin', para4);
box.insertAdjacentElement('afterEnd', para5);

//Insser adjacent HTML
box.insertAdjacentHTML('afterBegin', '<p>Added by insertAdjacentHTML</p>');

//Remove Child
// box.removeChild('h2');

//replaceChild
let input = document.createElement('input');
input.placeholder = 'insert something';
let para1 = document.querySelector('.para');
box.replaceChild(input, para1);

//Attribute
let h1Attri = h1.getAttribute('color');
console.log(h1Attri);
let newp = document.createElement('p');
newp.innerText = 'new p tag';
newp.setAttribute('color', 'red');

box.appendChild(newp);
console.log(newp.hasAttribute('color'));

//classList 
// add(), remove(), contains(), toggle()

newp.classList.add('class-1');
newp.classList.add('class-1', 'class-2', 'class-3');
newp.classList.remove('class-3');
console.log(newp.classList.contains('class-1'));

setInterval(() => {
	newp.classList.toggle('class-2');
}, 2000);

//HTML Attribute
function sayHello() {
	console.log('Hello');
}

//DOM Property
document.querySelectorAll('button')[1].onclick = function() {
	console.log('sayGoodBye');
}

document.querySelectorAll('button')[2].addEventListener('click', () => {
	console.log('sayNeverComeBack');
});













