var fs= require('fs');

fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;
  
  var contents=data.toString();
  var lines = contents.split("\n");
  var countLine = lines.length-1;
  console.log(countLine);	
  
});