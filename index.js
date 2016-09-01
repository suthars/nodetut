var fs = require('file-system');
fs.readFile(__filename,{encoding:'utf8'},gotFileContent);

function gotFileContent(err,content){
 if(err){
     console.log(err);
 }
 else
 {
     console.log('this file content:\n\n%s',content);
 }
}
