var fs = require('fs')
fs.readFile(process.argv[2],(err,res)=>{
    err? console.log(err):
    console.log( res.toString().split("\n").length-1)
})
