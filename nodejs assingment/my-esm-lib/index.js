const fs = require('fs');
 fs.writeFile('node_js architecture.txt', 'Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations  including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chromes V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a clients browser that obtains all the applicatios resources over the internet', function(err) {
    if (err) {
        console.log('unsucessful');
    } else {
        console.log('sucessful write');
    }
 })
   
 fs.appendFile('node_js architecture.txt', 'Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.', function(err) {
    if (err) {
        console.log('not added');
    } else {
        console.log('successfully added');
    } 
    
 })

//  fs.unlink('node_js architecture.txt', function(err) {
//     if (err) {
//         console.log('link');
//     } else {
//         console.log('delete'); 
//     }
//  })

const os = require("os");

console.log("Operating system name: " + os.type());

console.log("OS release : " + os.release());


const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>')
    }
    res.end();
})
server.listen(5000);
console.log('the http is running on port server 5000');



// event 
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah");

console.log(
  `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);

eventEmitter.setMaxListeners(5);

console.log(
  `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);