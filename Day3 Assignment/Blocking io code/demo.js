var fs= require('fs');
var contents= fs.readFileSync('data.json').toString();
console.log(contents);