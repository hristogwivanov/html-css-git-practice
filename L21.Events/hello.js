function sayHello(name) {
    console.log(`Hello, ${name}`);
}

let days = ["Monday", "Tuesday", "Wednesday"];



const CONFIG = {
    username: "someone",
    access: ["ADMIN", "READER", "EDITOR"],
};

export default CONFIG;

export {sayHello as hi, days};