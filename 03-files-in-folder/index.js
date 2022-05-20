const fs = require('fs');
let path = require('path')
fs.readdir("03-files-in-folder/secret-folder", {withFileTypes: true}, function(err, items) {
    for (let i=0; i<items.length; i++) {
        let a = items[i];
    if(a.isFile()){
let type = "<" + path.extname(a.name).slice(1, path.extname(a.name).length ) + ">";
let name = "<" + a.name.slice(0, a.name.length-type.length+1) + ">";
let result = name + "-" + type + "-";
       
        fs.stat("03-files-in-folder/secret-folder/"+a.name ,function(err,stats){

            console.log(result+"<" + stats.size +"b"+ ">");
        })
    }
    }
});
