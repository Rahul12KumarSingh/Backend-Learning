const os = require("os") ;
const file = require("fs") ;


/********************* os info *********************/
// const cpuCore = os.cpus().length ;
// const architec = os.arch() ;
// const operatingSystem = os.type() ;
// const totalRam = os.totalmem() /( 1000 ** 3 );
// const freeRam = os.freemem()  /( 1000 ** 3 ) ;
// const cpuModel = os.cpus()[0].model ;
// const cpuSpeed = os.cpus()[0].speed ;


// console.log("os info : " , {
//      cpuCore : cpuCore ,
//      architec ,
//      operatingSystem ,
//      totalRam ,
//      freeRam ,
//      cpuModel ,
//      cpuSpeed
// })


/*************  storage info **********************/
// const si = require("systeminformation") ;

// async function getSystemInfo(){
//       try{
//         const diskData = await si.diskLayout() ;
//         const memoryData = await si.mem() ;
//         const cpuData = await si.cpu() ;

//         const batteryData = await si.battery() ;
//         const networkData = await si.networkInterfaces() ;

//        console.log("system info : " , {
//           diskData ,
//           memoryData ,
//           cpuData ,
//           batteryData ,
//           networkData
//        }) ;

//       }catch(error){
//           console.log("error : " , error.message) ;
//       }
// }

// getSystemInfo() ;

/************************* http server *********************************** */

const http =  require("http") ;
const server = http.createServer((req , res) => {
      
      const loginTime = new Date(Date.now()).toLocaleString() ;

      file.appendFile("data.txt" , `use logined at ${loginTime}\n` ,  (err , succ)=> {
         if(err)
          {
             console.log("err  : " , err) ;
          }
         else{
             console.log("suceess : " , succ) ;
         }
      }) 

      res.statusCode = 200 ;
      res.end("Hiii") ;
})

server.listen(8080 , ()=>{
      console.log("backend server is running.....") ;
})

/*********************  file handling ************* */

//blocking .....
const bData = file.readFileSync("data.txt" , "utf-8") ;
console.log("file Data  : ",  bData) ;


//non blocking... 
file.readFile("data.txt" , "utf-8" , (err , res)=>{
      if(err)
         {
            console.log("error happen while reading the file") ;
         }
    else{
         console.log("file info :  " , res) ;
    }
})

file.open("data.txt" , "r" , (err , fileData) => {
    if(err)
         {
            console.log("something went wrong while opening the file..");
         }
    else{
         console.log("file is opened...");
    }
}) ;


