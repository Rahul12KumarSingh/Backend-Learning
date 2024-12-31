const fs = require("fs") ;
const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 3 ;

/*
setTimeout(()=>{
     console.log("time interval fucntion 1")
} , 0) ;

setImmediate(()=>{
     console.log("immediate function 1");
})

console.log("top level code") ;

output -->
  top level code
  time interval function 1
  immediate function 1
*/

/*
setTimeout(()=>{
   console.log("time interval fucntion 1")
} , 0) ;

setImmediate(()=>{
   console.log("immediate function 1");
})

output --> 

  immediate function 1
  time interval function 1

*/

/*
setTimeout(()=>{
   console.log("time interval fucntion 1")
} , 0) ;

setImmediate(()=>{
   console.log("immediate function 1");
})

fs.readFile('data.txt' , 'utf-8' , ()=>{
   console.log('IO polling finish');

   setTimeout(() => {
       console.log('timer interval function 2' ) ;
   } , 0) ;

   setTimeout(() => {
      console.log('time interval function 3') ;
   } , 5*1000) ;

})

console.log("top level code") ;

output :- 
top level code
time interval fucntion 1
immediate function 1
IO polling finish
timer interval function 2
time interval function 3

*/



const start = Date.now() ;

setTimeout(()=>{
   console.log("time interval fucntion 1")
} , 0) ;

setImmediate(()=>{
   console.log("immediate function 1");
})

fs.readFile('data.txt' , 'utf-8' , ()=>{
   console.log('IO polling finish');

   setTimeout(() => {
       console.log('timer interval function 2' ) ;
   } , 0) ;

   setTimeout(() => {
      console.log('time interval function 3') ;
   } , 5*1000) ;

   setImmediate(() => {
      console.log("set immediate function 2") ;
   })

   //cpu intensive work...
   crypto.pbkdf2('password' , 'salt' , 10000 , 1024 , 'sha512' , ()=>{
       console.log('password 1 Done' , Date.now()  - start) ;
   } )

   crypto.pbkdf2('password' , 'salt' , 10000 , 1024 , 'sha512' , ()=>{
      console.log('password 2 Done' , Date.now()  - start) ;
  } )

  crypto.pbkdf2('password' , 'salt' , 10000 , 1024 , 'sha512' , ()=>{
   console.log('password 3 Done' , Date.now()  - start) ;
 } )

 crypto.pbkdf2('password' , 'salt' , 10000 , 1024 , 'sha512' , ()=>{
   console.log('password 4 Done' , Date.now()  - start) ;
 } )

 crypto.pbkdf2('password' , 'salt' , 10000 , 1024 , 'sha512' , ()=>{
   console.log('password 5 Done' , Date.now()  - start) ;
 } )

 crypto.pbkdf2('password' , 'salt' , 10000 , 1024 , 'sha512' , ()=>{
   console.log('password 6 Done' , Date.now()  - start) ;
 } )

 crypto.pbkdf2('password' , 'salt' , 10000 , 1024 , 'sha512' , ()=>{
   console.log('password 7 Done' , Date.now()  - start) ;
 } )

 crypto.pbkdf2('password' , 'salt' , 10000 , 1024 , 'sha512' , ()=>{
   console.log('password 8 Done' , Date.now()  - start) ;
 } )


})

console.log("top level code") ;

// top level code
// time interval fucntion 1
// immediate function 1
// IO polling finish
// set immediate function 2
// timer interval function 2
// time interval function 3