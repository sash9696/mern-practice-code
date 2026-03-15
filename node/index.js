// Node Module system
// custom module
// node uses common JS modules

// require()

// const math = require('./math');

// console.log(math.add(10,20))

// Core modules

// file system module

// const fs  =require("fs");

// fs.readFile("notes.txt", "utf8", (err, data) => {
//     console.log(data)
// })

// fs.writeFile("notes.txt", 'Hello world', () => {
//     console.log("File written")
// })

// promise api

// const fs = require("fs/promises");

// async function read() {
//   const data = await fs.readFile("notes.txt", "utf8");
//   console.log(data);
// }

// read();

// fs.readFile("notes.txt", "utf8")
//     .then((data) => console.log(data))


// Note taking CLI

// create notes

// const fs = require('fs');

// function createNote(title, content){
//     fs.writeFile(`notes/${title}.txt`, content, () => {
//         console.log("Note saved")
//     })
// }

// createNote("todo","learn node");


// fs.readFile("missing.txt", 'utf8', (err, data) => {
//     if(err){
//         console.log("File error:", err.message)
//         return;
//     }
// })


// Path module

// const path = require("path");

// const fullPath = path.join(__dirname, 'files', "notes.txt")
// // console.log(fullPath)

// // path.basename()

// console.log(path.extname("file.txt"))

// OS modules
// info abt  the operating system

// const os = require('os');

// console.log(os.cpus())
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.uptime())

// system monitor script


// const os = require('os');

// setInterval(() => {
//     console.log('Free memory:', os.freemem())
// }, 2000)


// Events  module

// const EventEmitter = require("events");


// const emitter = new EventEmitter();

// // register a new event

// emitter.on("orderPlaced", (order) => {
//     console.log("Processing order: ", order)
// })

// emitter.emit("orderPlaced", {id:1})

// internally Node uses events for
// HTTP requests
// streams
//sockets



// HTTP Module

// const http = require('http')
// // create a web server

// const server = http.createServer((req, res) => {
//     console.log(req.method, req.url)
//     if(req.url === '/users'){
//         res.write(JSON.stringify({
//             name:'john'
//         }))
//     }else{
//         res.write('hello from server');

//     }
//     res.end()
// })

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server started on port: ${PORT}`)
// });

// Streams

// process the data in chunks

// const fs = require('fs');

// const stream = fs.createReadStream('large.txt')

// stream.on("data", (chunk) => {
//     console.log(chunk.length)
// })


// buffers

// const buffer = Buffer.from("hello world")

// console.log(buffer)



// const fs = require("fs/promises");

// async function read() {
//   const data = await fs.readFile("notes.txt", "utf8");
//   debugger
//   console.log(data);
// }

// read();

// node --inspect index.js



// Node js uses event loops

// event loop cycle

// execute code
// process callbacks
// handle I/O
// run timers
// repeat

// Runs before event loop continues

// process.nextTick(() => {
//     console.log('next tick')
// })