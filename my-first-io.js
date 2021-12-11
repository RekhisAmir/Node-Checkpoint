var fs = require('fs')

var contentFile = fs.readFileSync(process.argv[2], 'utf-8')
var n = contentFile.toString().split("\n").length-1
console.log(n)

