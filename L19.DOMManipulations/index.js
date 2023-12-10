// const body = document.body;

// const  nodeList = body.childNodes;
// const elementCollection = body.children;
// console.log(body.childNodes);
// console.log(body.children);

// for(let item of childNodes) {
//     console.log(item);
// }

// NodeFilter.filter(item => item.nodeType !== 1)

// const element = document.getElementById("main_content");

// if(element)
//     element.style.background = "red";

// console.log(element);
// console.log(navigation);
// console.log(main_content);

// const texts = document.getElementsByClassName("text");
// console.log(texts);

// for(let text of texts) {
//     console.log(text);
//     text.style.color="blue";
// }

// const pList = document.getElementsByTagName("*");
// console.log(pList)

// const liList = document.querySelectorAll("ul > li")
// console.log(liList);

// const allLiList = document.querySelectorAll("li");
// console.log(allLiList);

// for(let li of allLiList){
//     console.log(li);
// }

// const nav = document.querySelectorAll("#navigation");
// console.log(nav);

// console.log(nav.closest("div.grandparent"));

// const navLiItems = nav.querySelectorAll("li");
// console.log(navLiItems);

// nav.contains(navLiItems[0]);

// const body = document.body;

// body.innerHTML +=`<table><tbody><tr><td>Hello</td></tr></tbody></table>`

// let table = document.createElement.table

// let div = document.createElement("div");

// let textNode = document.createTextNode("I was created  with JavaScript")

// div.append(textNode);
// body.append(div);

// const ol = document.querySelector('ol');

// ol.before('Add before ol');

// ol.after("Add after ol");

// let li = document.createElement("li");
// li.textContent = "I was created  in JS";

// ol.append(li);

// li = document.createElement("li");
// li.textContent = "I was modified in JS"


// TABLE CREATED IN JAVASCRIPT
// const data = [
//     {name: "Ivan", age: 21},
//     {name: "Petar", age: 24},
//     {name: "Mitko", age: 40},
// ]
// function crateTable(data){

//     const body = document.body
//     const table = document.createElement("table");

//     const dataKeys = Object.keys(data[0]);
//     console.log(dataKeys);

//     const tableHead = creaeteTableHead(dataKeys);
//     table.append(tableHead);

//     const tableBody = document.createElement(data);
//     table.append(tableBody);
//     body.append(table);

    
// }


// function creaeteTableHead(dataKeys){
// const tableHead = document.createElement("thead");
// const tr = documen.createElement("tr");

// for (let key of dataKeys) {
//     const th = document.createElement("th");
//     th.textContent = key;
//     tr.append(th);
// }
// tableHead.append(tr);

// }

// function createTableRow(container){
//     tr = document.createElement("tr");
//     container.append(tr);

// }

// function createTableData(container, type){
//     const td = document.createElement("td");
//     // tdText = document.
// }

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => createTable(json));

// function crateModal(text){
//     const div = document.createElement("div");
//     div.style.position = "absolute";
//     div.style.top = "0";
//     div.style.right = "0";
//     div.style.background = "green";
//     div.style.color = "white";
//     div.style.width = "fit-content";
//     div.style.padding

// }

/** END TABLE CREATED IN JS */

const div = document.querySelector('div.item');
console.log(div);
// console.log(div.classList);
// console.log(div.className);

// // div.className +=" container holder top-item";


// div.classList.add("container");

// div.classList.add("container");

// div.classList.remove("item");

// div.classList.toggle("hidden");

// console.log(div.classList.contains("item"));
// console.log(div.classList.contains("hidden"));

// div.style.width = "200px";

// div.style.width = "";


// div.style.cssText = `
// position: absolute;
// top: 0;
// right: 0;
// background-color: green;
// color: white;
// padding:10px
// `

// console.log(div.getAttribute("style"));
// console.log(div.getAttribute("class"));

// div.setAttribute("id", "modal-container")
// div.removeAttribute("style")





// background-color => backgroundColor;
// font-size => fontSize


dispatchEvent.onclick = function(event) {
    console.log(event);
    alert ('TOU CLICKED WHEN I TOLD YOU NOT TO CLICK')
}