var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2],(err,res)=>{
    if(err) console.log(err)
    else {
         res.forEach(file=> {
             if (path.extname(file) === "." + process.argv[3]){
                 console.log(file)
             }
         })
      
    } 
})
