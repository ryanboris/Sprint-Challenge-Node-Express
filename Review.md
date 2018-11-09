# Review Questions


## What is Node.js?

Node.js is an asynchronous, event-driven JavaScript runtime, which was designed to build scalable network applications and runs Google's V8 engine.  Node.js, in my opinion,is probably one of the most historically significant applications and frameworks in the JavaScript myriad because it essentially revolutionized the way JavaScript was used by bringing it out of the browser and placing it as a major contender among the other established, power-house programmatic languages.  In overview, it really is "server-side" JavaScript and is quite the powerhouse today considering JavaScript's somewhat humble beginnings and early legacy for making goofy Web 1.0 animations that were often distracting or, at best, laughable in the hands of the wrong developer.  Node represents a major idea of the current programmatic mindset, representing a language that transverses the World Wide Web as a true fullstack language, working across the entire spectrum, from the front-end to the server-side back-end.  Otherwise, the norm was to encounter different languages moving from the front-end, to the transfer space between the front and the back-end, and then of course the back-back end of the database - oh and, JS is there too...if one considers JSON and its data-base spin-off wonders (Mongo/Maria).


## What is Express?

Express.js is an un-opinionated, lightweight library that sits upon the foundational functionality of Node.js.  It's claim to fame is that it provides Routing capabilities,middleware - both third party and custom types, tons of powerful APIs and utility methods, and is suited to create robust web applications.



## Mention two parts of Express that you learned about this week.

Express.js Middleware - these are extra "pops" of functionality that are incredibly useful in the sense that the can stop request/response callbacks, modify them, process or prep them prior to their execution.  Middleware can be global or local, and that idea can be wielded just as powerfully as the concept is used in the realm of JS scope and closures with its variable declaration syntaxes.  Custom middleware is also very easy to create and takes on the form of a function that can be utilized at each scope of the executing Express.js application. ```

Express.js Routing - essentially how to move between endpoints, exactly as one would see with the addition of React Router but now happening not directly on the client but in this ethereal space between the client and the back-end.  It provides a wonderful compartmental structure to the Express application and conveys great organization to a gigantic collection of informational code that isn't too uncommon when one scales up to certain levels of production.  For some odd reason, the concept is pretty much the same as the React Router theory, yet I just seem to understand it to a much more robust extend when it comes to Express.



## What is Middleware?

If you break down the term, it literally is software that's in the middle - essentially acting as a bridge between an operating system or database and applications.  It can convey extra power, provide regulation or authentication, or monitor processes as they occur with the ability to stop/start or pass them sequentially down a queue chain.  



## What is a Resource?

A resource is usually what is found at the end of a successful request directed to a given endpoint.  Resources are data - whatever that data might be numbers, customers, names, strings, objects, phone numbers, prices, so on and so forth.  




## What can the API return to help clients know if a request was successful?

There are a myriad of status codes that are standardized 3 digit number sequences that represent many different response patterns that are very common in the articulation betweeen clients and APIs.  They can be broken into a few categories, with ones that denote successful requests and ones that show rejections.  Two common status codes that would be considered to be indicitive of a successful process are the codes 200 (OK/successful) and 201(added/OK).



## How can we partition our application into sub-applications?

Using Express.js's routing functionality you are able to set up compartmentalized structures and connect them, additionally, you also have the tools of Common.js on your side too (require and module.exports)



## What is express.json() and why do we need it?

This takes the place for the functionality of what bodyParser.json() would provide, essentially this allows the ability to access and use the data from POST requests. 

