const fs = require('fs');
let path = require('path')

fs.writeFile("05-merge-styles/project-dist/bundle.css", "", function(err){
    if (err) {
        console.log(err);
    } 
});

const output = fs.createWriteStream("05-merge-styles/project-dist/bundle.css");

fs.readdir("05-merge-styles/styles", {withFileTypes: true}, function(err, items) {

    fs.truncate("05-merge-styles/project-dist/bundle.css", err => {
        if(err) throw err; 
     });

    for (let i=0; i<items.length; i++) {
        let item = items[i];
        if (path.extname(item.name)===".css"){ 
        let input = fs.createReadStream("05-merge-styles/styles/"+item.name, 'utf-8');
    input.pipe(output);

          
            
        }
    }})