// setTimeout(() => {
//     console.log("One");
// }, 1000);

// setTimeout(() => {
//     console.log("Two");
// }, 500);

// setTimeout(() => {
//     console.log("Three");
// }, 2000);

// let promise = new Promise(function(resolve, reject){
//     //code to be executed
//     //resolve(value);
//     //reject(error);

//     setTimeout(() => {
//         reject("Somehting went wrong!"); 
//     }, 4000);
//     setTimeout(() => {
//         resolve("Everything is okay!");
//     }, 3000);
// });
// promise.finally(() => console.log("That's all folks!"));
// promise.then(value => console.log(value));
// promise.catch(error => console.log(error));

// new Promise(function (resolve, reject){
//     // code to be executed;
//     // resolve(value);
//     // reject(error);

//     setTimeout(() => {
//         reject("Something went wrong!");
//     }, 4000);
//     setTimeout(() => {
//         resolve("Everything is okay!");
//     }, 3000);
// }).then((value) => console.log(value))
//     .catch(err => console.log(err))
//     .finally(() => console.log("That's all folks"));

// async function foo() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("finito!"), 1000);
//     })

//     let result = await promise;

//     return result;
// }


// console.log("OPA");
// console.log(foo());
// console.log("OPA2");


// Promise.all([
//     new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//     new Promise((resolve) => setTimeout(() => resolve(3), 2500)),
// ]).then(value => console.log(value));

// Promise.allSettled([
//     new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//     new Promise((resolve) => setTimeout(() => resolve(3), 2500)),
// ]).then(value => console.log(value));

// Promise.race([
//     new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//     new Promise((resolve) => setTimeout(() => resolve(3), 2500)),
// ]).then(value => console.log(value));

// Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => reject(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(3), 2500)),
// ]).then(value => console.log(value));


// AJAX

//let promise = fetch(url, {options})

// async function getPosts() {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//     if (response.ok) {
//         let json = await response.json();
//         console.log(json);
//     } else {
//         console.log("Error");
//     }
// }

// getPosts();

// const obj = {
// 	"0": {
// 		"userId": 1,
// 		"id": 1,
// 		"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// 		"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// 	}
// }

// fetch(`https://jsonplaceholder.typicode.com/posts?id=10`, {
//     method: "GET",

// })
//     .then(response => response.json())
//     .then(json => readPosts(json))
//     .catch(err => console.log(err));


// function readPosts(posts) {
//     for(let post of posts){
//         console.log(post);
//     }
// }


/**
 * GET
 * POST
 * PUT
 * PATCH
 * DELETE
 */

// const obj = {
// 	"0": {
// 		"userId": 1,
// 		"id": 1,
// 		"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// 		"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// 	}
// }

// let xhr = new XMLHttpRequest();
// xhr.open("POST", `https://jsonplaceholder.typicode.com/posts`);

// xhr.setRequestHeader("Content-Type","application/json");


// xhr.onload = function () {
//     if(xhr.status > 399){
//         console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     } else {
//         console.log(JSON.parse(xhr.response));
//     }
// }

// xhr.onerror =function () {
//     console.log("Something went wrong");
// }

// xhr.onprogress = function (event){
//     console.log(event, "Event");
// }

// xhr.send(JSON.stringify(obj));

const form = document.querySelector("#login");

form.addEventListener('submit', function (event){
    event.preventDefault();
    const username = form.querySelector('input[name="username').value;
    const password = form.querySelector('input[name="password"]').value;
    console.log(username);
    console.log(password);

    fetch('https://jsonplaceholder.typicode.com/posts') 
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.body.append("YOU LOGGED IN")
        });
})