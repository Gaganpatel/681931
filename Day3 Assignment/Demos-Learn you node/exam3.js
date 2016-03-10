var fs= require('fs');
var contents= fs.readFileSync(process.argv[2]).toString();

var lines = contents.split("\n");
var countLine = lines.length-1;
console.log(countLine);