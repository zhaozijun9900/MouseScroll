const fs = require("fs");

//阻塞：
// let data =  fs.readFileSync('text.txt');

// console.log(data.toString())

// console.log("我是同步执行；阻塞!")

//非阻塞：
fs.readFile('text.txt', (err, data) => {
    if (err) console.log(404);
    console.log(data.toString());
})
console.log("我是异步执行；非阻塞！")





