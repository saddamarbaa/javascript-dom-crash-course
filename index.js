/* ==========================================
   dom.js
   Course:  JavaScript DOM Crash Course
   ========================================== */


// alert("test");

// EXAMINE THE DOCUMENT OBJECT //

// this will show us all the Properties and methods attach to the document object 

console.dir(document);

// thsi will give us domain) 
console.log(document.domain);

// thsi will give us url) 
console.log(document.URL);

// thsi will give us page title) 
console.log(document.title);
// document.title = 123;
console.log(document.title);

// thsi will give us !DOCTYPE html) 
console.log(document.doctype);

// thsi will give us head) 
console.log(document.head);

// thsi will give us body) 
console.log(document.body);

// thsi will give us all as array) 
console.log(document.all);

// console.log(document.all[0]);

// console.log(document.all[3]);

// thsi will give us all the form ) 
console.log(document.forms);

// thsi will give us link) 
console.log(document.links);

// thsi will give us the first form) 
console.log(document.forms[0]);

// thsi will give us images) 
console.log(document.images);


// SELECTORS//

// GETELEMENTBYID

let headerTitle = document.getElementById('header-title');

let header = document.getElementById('main-header')

console.log(headerTitle);
console.log(header);

// textContent

// headerTitle.textContent = "hello";

// innerText

// headerTitle.innerText = "goodby";

// innerHTML

// headerTitle.innerHTML = "goodby";

// change the style 
header.style.borderBottom = 'solid 1px red';


// GETELEMENTBYCLASSNAME

// get all the element with class name list-group-item(HTMLCollection)
let items = document.getElementsByClassName('list-group-item');

console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
items[0].textContent = 'ok';
items[1].innerHTML = 'no ok for now';
console.log(items[0]);
console.log(items[1]);
items[0].style.backgroundColor = 'yellow';
items[0].textContent = 'Item 1';
items[1].innerHTML = 'Item 2';

// this will give eror
// items.style.backgroundColor = '#4f4f4';


// iterate over and style all the item

for (let index = 0; index < items.length; index++) {
    items[index].style.backgroundColor = '#4f4f4';
}


// GETELEMENTBYTAGENAME

let li = document.getElementsByTagName('li');

console.log(li);

console.log(li[0]);
console.log(li[1]);
console.log(li[2]);
console.log(li[3]);

li[0].textContent = 'tag ok';
li[1].innerHTML = 'tag is not ok for now';
console.log(li[0]);
console.log(li[1]);

li[0].style.backgroundColor = 'blue';
li[0].textContent = 'li 1';
li[1].innerHTML = 'li 2';

// iterate over and style all the li(list)

for (let index = 0; index < items.length; index++) {
    li[index].style.backgroundColor = 'lightblue';
}


// QUERYSELECTOR //


header = document.querySelector('#main-header')

header.style.border = 'solid 1px blue';
console.log(header);

// if there more than one input will select the first one
let input = document.querySelector('input');

let submit = document.querySelector('input[type="submit"]');


input.value = 'Sadam';
submit.value = 'send';


items = document.querySelector('.list-group-item');


// this give us the last child
let lastItem = document.querySelector('.list-group-item:last-child');

// this give us the second child
let secondItem = document.querySelector('.list-group-item:nth-child(2)');

// style the first item
items.style.color = 'red';

// style the second item
secondItem.style.color = 'yellow';

//  style the last item
lastItem.style.color = 'green';



// QUERY SELECTOR ALL // 

// this return us all the elment with id name title
let titles = document.querySelectorAll('.title');

console.log(titles);

// now have nodeList(array of titles)
// titles[0].textContent = 'Hello again';

// titles[1].textContent = 'nice to meet You';

// get all odd list element
let odd = document.querySelectorAll('li:nth-child(odd');


// get all even list element
let even = document.querySelectorAll('li:nth-child(even');

// loop over each even li and styled
for (let index = 0; index < odd.length; index++) {
    even[index].style.backgroundColor = '#ccc';

}



// TRAVERSING THE DOM //


let itemList = document.querySelector('#items');

console.log(itemList);

// parentNode

// get the parentNode
console.log(itemList.parentNode);

// get the  grandparentNode
console.log(itemList.parentNode.parentNode);

// style the parent node
itemList.parentNode.style.backgroundColor = '#f4f4f4';


// parentElemnt

// Note :(parentElemnt and parentNode are almost same)

// get the parentNode
console.log(itemList.parentElement);

// get the  grandparentNode 
console.log(itemList.parentElement.parentElement);

// style the parent node
itemList.parentElement.style.backgroundColor = '#f4f4f4';

// childNode

//  get the childNode
console.log(itemList.childNodes);

// get the  grandchildtNode
console.log(itemList.childNodes.childNodes);


// children

//  get the children
console.log(itemList.childre);
console.log(itemList.children[2]);
console.log(itemList.children[1]);
console.log(itemList.children[3]);


// firstChild

// not good idea to use this
console.log(itemList.firstChild);


// firstElementChild

// good idea to use this
console.log(itemList.firstElementChild);

// lastChild

// not good idea to use this
console.log(itemList.lastChild);

// lastElementChild

//good idea to use this
console.log(itemList.lastElementChild);


// nextsibling

console.log(itemList.Sibling);

// nextElementSibling

console.log(itemList.nextElementSibling);

// previousSibling

console.log(itemList.previousSibling);

// previousElementSibling

console.log(itemList.previousElementSibling);


// createElement


// create div

// we have created div
let newDiv = document.createElement('div');

console.log(newDiv);

// let add class to the div
newDiv.className = 'helo';
console.log(newDiv);

// let add also ID to the div
newDiv.id = 'helloID1';
console.log(newDiv);



// let add also atr to the div
newDiv.setAttribute('title', 'hello div');
console.log(newDiv);


// let add text to our div

// create text node
let newDivText = document.createTextNode("hello new div this is the text");


// add text to div
newDiv.appendChild(newDivText);
console.log(newDiv);

// now our div is ready let added to the Dom

let container = document.querySelector('header .container');

let h1 = document.querySelector('header h1');
console.log(h1);

// now our div is been inserted just before the h1
container.insertBefore(newDiv, h1);
newDiv.innerHTML = 'Hello WOrld';
newDiv.style.fontSize = '30px';
newDiv.innerHTML = '';


// EVENT // 

//  EventListener  // 


//  when button been clicked call the flowing function
let button = document.getElementById('button').addEventListener('click', function() {
    document.getElementById('header-title').innerHTML = 'Change';
    console.log(1234);
});



const buttonFunction = function() {
    document.getElementById('header-title').innerHTML = 'Item lister';
    console.log('buttonFunction is been called');

};

//  when button been clicked call the flowing function 
let buttonTest = document.getElementById('button').addEventListener('click', buttonFunction);


// passing even  Parameters to function

const buttonClickFunction = function(e) {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.clientX);
    console.log(e.clientY);

};


// function which will tell us Even Parameters type

function runEvent(e) {

    console.log('EVEBT TYPE : ' + e.type);
}

let runEventButton = document.getElementById('button');

runEventButton.addEventListener('click', runEvent);

runEventButton.addEventListener('dbClick', runEvent);

runEventButton.addEventListener('mousedown', runEvent);

runEventButton.addEventListener('mouseup', runEvent);


let box = document.getElementById('box');

box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
console.log(itemInput);

itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);

itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);