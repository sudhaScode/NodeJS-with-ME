## Differences b/w Node JS and Browser JS environment:

1. `Environment:`<br>

- Browser: JavaScript runs within the browser environment, interacting with the `Document Object Model (DOM)` and web APIs like `fetch` for network requests.
- Node.js: JavaScript runs outside the browser, in a `server-side environment`. It has access to `file system` interactions, `network requests` (through modules like http), and other server-specific functionalities.<br>
2. `Event Loop:`<br>

- Browser: The browser's event loop focuses on `handling user interactions` (clicks, scrolls, etc.), `rendering updates` (DOM manipulation based on JavaScript code), and `asynchronous tasks `(network requests, timers).
- Node.js: The Node.js event loop prioritizes `handling asynchronous tasks` and `network requests.` User interactions are not the primary focus, but Node.js can handle them through modules like http for creating servers.<br>
3. `Global Object:`<br>

- Browser: The global object in the browser is `window`. It provides access to DOM manipulation methods, event handling, and other browser-specific functionalities.
- Node.js: The global object in Node.js is the `global object`. It provides access to server-specific functionalities like `process` (for process management) and modules for file `system access`, `networking`, etc.<br>
4. `Modules:`<br>

- Browser: Traditionally, browsers didn't have built-in module systems. Modern browsers support module systems like `ES modules`, but fetching and loading modules might involve additional steps.
- Node.js: Node.js has a robust `CommonJS module system` for loading and organizing code into reusable modules. This simplifies code organization and dependency management on the server-side.
Execution Flow Example:<br>

**Browser:**<br>

1. User opens a web page.<br>
2. Browser fetches and parses the HTML, CSS, and JavaScript code.<br>
3. JavaScript code goes through parsing, scoping, and memory allocation.<br>
4. The event loop starts, waiting for user interactions or asynchronous tasks.<br>
5. User clicks a button.<br>
6. The event loop processes the click event, triggering the associated JavaScript code.<br>
7. The code executes, potentially manipulating the DOM or making asynchronous requests.<br>
8. The browser updates the DOM based on the code's instructions.<br>
9. The event loop continues processing other tasks in the queue.<br>
**Node.js:**<br>

1. Node.js script is executed (e.g., node app.js).<br>
2. Code is parsed, scoped, and memory is allocated.<br>
3. The event loop starts, waiting for asynchronous tasks.<br>
4. The script might make a network request using modules like http.<br>
5. The request is queued in the event loop.<br>
6. Node.js continues processing other tasks in the event queue (if any).<br>
7. When the network request finishes, the event loop processes the response.<br>
8. The script can use the response data for further processing.<br>
9. The event loop continues processing other tasks.<br>


# Asychronous is NodeJS , NodeJS is Asychronous.
Best ways to handle the long running task like (I/O, network requests, and timers) without halting main thread , if main thread blocked the application gets un responsive untill main thread gets active or executes.
that's why **Asychronous is NodeJS , NodeJS is Asychronous**.
> Tip: <span style="color: green"> to get IP address of current machine use end point `https://checkip.amazonaws.com/`
- lsof -ti tcp:8082 # prints a number eg: 2020

- kill -9 2020 # replace 2020 with the number you got
</span>

**Upgrade not with > nvm install-latest-nvm or npm install -g n**
1. **Event-Driven Architecture:**

Node.js operates on an event-driven architecture. It has a single thread that listens for events (like incoming requests, file operations, etc.) and executes callbacks or handlers associated with those events.

2. **Non-Blocking I/O:**

- One of Node.js's strengths is its `non-blocking I/O` (Input/Output) operations. When a function performs an I/O operation (e.g., reading a file, making a network request), it doesn't block the main thread.
- Instead, Node.js schedules the I/O operation to be completed in the background and continues processing other events. Once the I/O operation finishes, Node.js triggers a callback function with the results to handle/process results.

**Benefits of Asynchronicity:**

- `Scalability`: Node.js can handle a large number of concurrent requests without blocking because the main thread isn't tied up waiting for I/O operations.
- `Responsiveness:` The server remains responsive even when handling long-running operations, as other requests can be processed while waiting for I/O to complete. three stages `pending`, `fullfiled`(.then) and `rejected` (.catch)
- `Efficient Use of Resources:` Node.js doesn't need to create a new thread for each request, making it resource-efficient.

**Handling Asynchronous Operations:**

There are several mechanisms to handle asynchronous operations in Node.js:

- `Callbacks:` Functions passed as arguments to be executed when an operation finishes.
- `Promises:` Objects representing the eventual completion (or failure) of an asynchronous operation.
- `Async/Await (ES6+)`: Syntactic sugar built on top of Promises for easier asynchronous code flow. which makes synchronous like coding but works asynchronously.

# Working Mechanism of Node.JS which makes the it event-driven model and non-blocking I/O model:

1.	`Initiate I/O`: Your Node.js program starts a non-blocking I/O operation, like reading a file or making a network request.
2.	`Event Loop`: The event loop registers a callback function for handling the I/O operation's completion.
3.	`Program continues`: the program doesn't wait for the I/O to finish. It moves on to execute other code or handle other requests.
4.	`I/O Completion`: When the I/O operation is complete, an event is triggered.
5.	`Event loop Triggers Callback`: The event loop recognizes the event and triggers the registered callback function.
6.	`Callback Execution`:  The callback function, which contains the code to handle the I/O result (e.g., process the data from the file or network response), is now executed.

The process of `Nodejs` makes node applications more scalable and well managed.<br>
Check out pillars of node - https://github.com/samerbuna/efficient-node  Best repo to know about following:
- node backend operations(event loop (event queue) and call stack of V8) for non blocking I/O operations.
-  node modules , well differentiation between exports (can be named export) and module.exports (can be default export).
- npm CLI tool provided by node, play aroud the npm commands (init, install, update, prune(to remove unused packages), ls, uninstall)
- built in package manager - for easy of depedency management (eslint), dependency tree structure. SemVer(sematic versioning (common use of chars ^ ( "caret" focus on Minor version to update), ~ (Tilde focus on patch version to update), >= or >,< or  <= <=, <= ))

# with Knowledge from repo Get Satrt
- $ npm init - to initialize node 

- $  npm install [axios] -install required packages installs the defined packages under dependencies section in package.json <
- create  server with http modules for better understanding of node js functionality
   https://nodejs.org/en/learn/modules/anatomy-of-an-http-transaction
## Anatomy of HTTP Traction
- create a server
- in order to serve the request a callback function is passed to the server
- the call back function gets called when ever a new request gets hit the server, the object in call back function has properties Method, URL and header.
- to send requested response, response (second parameter) objects offers methods to format the response body with `writeHead()` , `write()`, and `end()` - response object is an instance of ServerResponse.
- and a listen method which is called to serve the request once the responce is ready. listen method makes server response accessable to the client at defiend port.


**Request** - Readable Streams
The request object is an instance of IncomingMessage (Stream). request object  has properties like  Method, URL, Headers and body (for put and post requests).
*Handling Request*
- Reading a Request to from when request is received to server -these called request emmits, emits are accessed by on method
  - request.on('error') 
  - request.on('data')
  - request.on('end')

**Request Handling Flow:**

- `Incoming Request:` When a client (browser, mobile app, etc.) sends an HTTP request to your server, the Node.js runtime receives it.
- `Middleware Processing:` The request might pass through middleware functions that can perform tasks like authentication, logging, or parsing cookies.
- `Route Matching:` The framework (e.g., Express.js) identifies the appropriate route handler function based on the request method (GET, POST, etc.) and URL.
- `Route Handler Function Execution`: The route handler function you defined receives the req (request) and res (response) objects as arguments.

**Response** - Writable Streams
The response object is an instance of ServerResponse(Stream), It contains many useful methods for sending data back to the client.
*Generating Responce*
- response.setHeader() -implicitly sending header data
- response.statusCode - sets the status code explicitly, a variable
- response.writeHead() - explicitly sending headers data with status code and body 
- response.write() - sending response body
{note: ite replaces above two methods(setheader, statusCode) with write}
- ressponse.end() <br>
response also emits the error can accessed by response.on('error') <br>
We can send back the request with `respons.write(request)`

# EventEmitters:
`EventEmiiter` makes event-driven communication in your node applications, means events triggered by other objects can listen by other objects with defined name and with `emit("newevent", args1,...)`. events are defined by `emit` function can listen with `on` or `once`
- `Core Functionality:` EventEmitters are a core Node.js module that allows objects to emit named events and other objects to listen for and respond to those events.
- `Purpose:` They provide a simple way for different parts of your application to communicate.
- `Limitations:` They don't inherently handle HTTP requests and responses, nor do they offer routing or other functionalities essential for building REST APIs.
- `Limited Features:` The base EventEmitter class offers basic event emitting and listening functionalities, but lacks features like error handling, middleware, and organized event management.
**Key Methods:**
- `on(eventName, listenerFunction)`: Attaches a listener function to be executed when the eventName is emitted.
- `once(eventName, listenerFunction)`: Attaches a listener function that will be called only once for the first occurrence of the specified event.
- `emit(eventName, [arg1], [arg2], ...)`: Triggers an event with the specified name. Any additional arguments passed to emit will be provided as arguments to the listener functions.
- `removeListener(eventName, listenerFunction)`: Detaches a specific listener function from the event.
- `removeAllListeners(eventName)` (optional): Removes all listeners for a particular event.

**Additional Considerations:**

- EventEmitters are asynchronous, meaning event handlers are executed in the order they were attached, but not necessarily immediately after the emit call.
- You can use EventEmitter.listenerCount(eventName) to check the number of listeners attached to a specific event.
- For complex applications, consider using a library like eventemitter3 that provides additional features and error handling.
**Node JS Event Emmiters**
https://codeburst.io/basics-of-events-streams-and-pipe-in-node-js-b84578c2f1be <br>
Node.js comes with built-in support for events baked into the core events module. As always, use require(‘events’) to load the module <br>
the Server object returned by createServer is an EventEmitter
`var EventEmitter = require('events').EventEmitter;`<br>
`var emitter = new EventEmitter();` <br>
`// Subscribe`<br>
`emitter.on('foo', function (arg1, arg2) {`<br>
`console.log('Foo raised, Args:', arg1, arg2);`<br>
`});`<br>
`// Emit`<br>
`emitter.emit('foo', { a: 123 }, { b: 456 });<br>`
`// Unsubscribe`<br>
`emitter.removeListener('foo',fooHandler);`<br>
the Server object returned by createServer is an EventEmitter<br>
 `req.on("data", chunk=>{newTask += chunk.toString();})`
# Streams: 
While handling requests and responses with req and res, Node.js might deal with data as streams (sequences of data chunks). However, handling streams is not the primary focus of a REST API, but rather a technical detail of how Node.js processes data efficiently.
**Streams in Node.js (fs)**
Pipe:   
All streams are instances of EventEmitter. They emit events that can be used to read and write data.<br>
Mainly used for providing utility functions to create readable and writable streams from a file. <br>

`var fs = require('fs'); `<br>
`// Create readable stream` <br>
`var readableStream = fs.createReadStream('./cool.txt');`<br>
`// Pipe it to stdout`<br>
`readableStream.pipe(process.stdout);`<br>

Streams in Node.js are based on events. <br>
All that the pipe operation does is subscribe to the relevant events on the source and call the relevant functions on the destination.

*Difference between fs.readFile() and fs.createReadStream()*<br>
fs.readFile() loads file and reads it into memory and then writes it to response
where as fs.createReadStream() sends chunks of file like writing small chunks of file dividing entire process into that chunk size of file writing which reduces memory load and memory wastage/garbage reduction


# REST APIs in Node.js:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

- Structure: Built on top of the Node.js HTTP module, they adhere to the Representational State Transfer (REST) architectural style for creating web APIs.
- Components: They involve:
  - Routes: Endpoints that map to specific URLs for handling different resources or actions.
  - HTTP Methods: Utilize HTTP methods like GET, POST, PUT, DELETE for interacting with resources.
  - Request & Response Objects (req & res):
    - req (request): Carries information about the incoming HTTP request, including headers, body, and path, query parameters `req.query, req.params `. 
    - res (response): Used to send responses back to the client, including status codes, headers, and a response body.

## Node Process Object
https://www.freecodecamp.org/news/node-process-object-explained/
The process object in Node.js is a global object that can be accessed inside any module without requiring it. It is an essential component in the Node.js ecosystem as it provides various information sets about the runtime of a program.
- process.versions
- process.release
- process.stdin: a readable stream
- process.stdout: a writable stream
- process.stderr: a wriatable stream to recognize errors
- process.env
## Express.js
a light weight, full featured node js web framework to develop REST API

npm install express
import express
1. inialize express server
2. define routes/endpoints with handler function
3. call the listen method with port

-  make express to automatically parse from json by app.use(express.json);
- Express returns a 404 status code with HTML content by default for any unimplemented route

### Controllers
Keeping all logics inside the routing handler function makes the server file bulk and diffcult to debug.<br>
Controllers is aproach to separating the handler function from the  routing file and keeping inside Controllers file.<br>
- Reusing code logic
- It makes debugging easier by separating routing logic from route control logc

## Routing in NodeJS 
Routing is concept of maping request methods and url to sepcific endpoint from group of common entry end point.<br>
To send requested response to the client the alternative way in node applicatio with out routing libraries is done by deifferentiating `request methods` or `request url's` using if/else or switch control statement.

**Roting with Router**
Node.js provides the core functionality for building web servers (using the http or https modules) but doesn't offer a built-in routing system. 
- Router module offers routing to handle requests with their path and methods separately.

### Router by Express
Router API offered by Express allows to manage our routes in separate file and club all common entry paths.
- Easy to disable specific services from server
- Easy to manage API versioning
**use**
`use()` is method to map the router(middleware) and express object. 


### Validations using Joi
https://joi.dev/api/?v=17.5.0
- Joi is a validation library that helps us define a schema for our data
- And validate a set of data against that schema
 `npm install joi`<br>
 `const Joi = require("joi")`<br>
 `const schema = Joi.object()` <br>
 - Joi object supports method chaining, where you can call one method on the result of the previous one.
 `object.function().function().function()...`
-Joi has a function called keys() that takes in an object schema
- Here you can specify what keys need to be passed through what all checks<br>

`const schema = Joi.object().keys({`<br>
  `age: Joi.number() {can add more validations}`<br>
`})`<br>

- get validation by validator function it will returns the error object.<br>
`const getQueryErrors = (data) => {`<br>
  `const result = schema.validate(data);`<br>
  `return result.error;`<br>
`}`<br>

### Security with Express
- This function shall check the headers of the request and if it finds the “Authorization” header
- If the value for this header matches our Password then only we process the request, 
- Else return a status of 403 and {”message”: “Unauthorized Request”}


## Middlewares
The request might pass through middleware functions that can perform tasks like authentication, logging, validation or parsing cookies.
- Each middleware function can access to `request`, `response` and can invoke next sequence function.
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.


- `express.json()`: Parses incoming requests with JSON payloads.
- `express.urlencoded()`: Parses incoming requests with URL-encoded payloads.
- `express.static()`: Serves static files and assets such as HTML, CSS, and images from a specified directory.
- `express.Router()`: Creates modular route handlers to organize routes into separate files or modules.
- `express.session()`: A middleware that manages user sessions.
- `express.cookieParser()`: A middleware that parses cookies from a request.

# app.use (Endpoint)> app.get  (Router) > MIdlleware, Validation, Controller (Handler function) 

## DATABASE Connectivity
- SQL -MySQL, POstgreSQL
- NoSQL - MongoDB , Firestore


## body validation 


# Bussiness Logic Layer
Keep all logic of data processing from controller, a separate  layer from the server routing which has only responsibilities of data controling


**Layered Architecture:** (outer layer to inner layer) <br>
Request flows flows from outer layer to inner layer. If something breaks in any controller check the outer layer. `each inner layer depends on outer layers `
- Routes (Outer layer - Router() often middle ware) or Endpoints
- Middlewares [router middleware, compression middleware, express.json() / body-parser middleware, helmet, cors, rate-limit, x-frame-options, csp (Content-Security-Policy), multer, cookieParser, session, passport]
- Controllers - Req and res hanndlers
- Services - (often a class) with data processing (crud operation with database)
- Model - database driver 

# Passowrd Hashing and Verifying hasing passwords
- decrypt
- - `salt`
- - `hash`
- - `compare`

# Understanding Login flows

# Generating Web Tokens -JWT
## How JWTs Work

**Token Generation:**

Upon successful user login, the server creates a JWT. This token is a compact, URL-safe string containing three parts:
Header: Defines the token type (JWT) and signing algorithm.
Payload: Contains claims (data) about the user, such as user ID, username, roles, and expiration time. This payload is Base64Url encoded.
Signature: Ensures the token's integrity and authenticity. It's created by cryptographically signing the header and payload using a secret key known only to the server.
**Client Storage:**

The server sends the JWT back to the client (typically stored in browser local storage or cookies with HttpOnly flag for security).
**Authorization Requests:**

The client includes the JWT in the Authorization header of subsequent requests to protected resources on the server.
**Server Verification:**

The server receives the JWT from the Authorization header.
It verifies the token's signature using the same secret key.
If valid, the server extracts the user claims from the payload and uses them for authorization decisions (e.g., granting access to resources).
**Requirements:**

Secret Key: A strong, cryptographically secure key shared between the server and client (typically stored securely on the server).
Libraries/Frameworks: Libraries or frameworks for JWT generation, verification, and decoding on both server and client sides (depending on programming languages).

# Understanding CORS

# Setting a Cookie

- Cookies are a way to store data inside a browser, like localStorage, but they provide us more control than just a key-value pair
  - We can set the cookies with an expiry time for the cookie data
  - Use the server to set the cookie on the frontend (so that it’s secure, and not accessible by the frontend console)
- Over the frontend we can access all the cookies using document.cookie
- Generate token using `jsonwetoken` on succesfull login, and see below steps to set cookie in browser from server.
**Cokkie FLow**
```
After the credentials are verified

→ The server will generate a JWT token 
→ But instead of sending it as a JSON, it will send a cookie to the client 
→ The client will set the cookie inside the browser depending on the request 
→ And then later use this token with every request that requires authorization.

```
**Sending a Cookie**

```
Our res object has a function cookie to set a cookie and send it back with the request.
The cookie function takes in three parameters
   cookie name → this will be used to identify the cookie inside the browser
   value → The value of the cookie, here it will be our jwt
   options → configuration options for the cookie, such as maxAge (the time after which the cookie will expire).
The maxAge here is taken in ms so for 1 hour → 60 minutes * 60 seconds = 1 h, to convert it to ms we multiply it by 1000
```

## Maintain Session
In order to maintain throught user active session,  which stored as cookie/session storage in browser. maintain this state of login for the user

**CAP Theorm**
**JWt TOKEN** - body components are encrypted header + payload +secretcode =- signature

![Token](image.png)
**create with `jsonwebtoken`**
![alt text](image-1.png)
**What is an Cookie?**
Cookie is piece of data/token/value from a website that is stored by browser for later use of web site authorization.
**What are Json web tokens**
Each JWT contains encoded JSON objects, including set of claims. JWTs are signed using a cryptographic algorithm to ensure that claims cannot be altered after token is issue.
Typically used fro `Authorization`
**What is CORS**
`Cross Origin Resource Sharing` is a mechnism that allows other defined origins to access teh resource from server, and origins which are trying to request server , cors rejects it.<br>
Main adjective is to restrict the accessing resources on web page to be requested from another domain which is not allowed/defined
