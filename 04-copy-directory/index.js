const fs = require('fs');
let path = require('path')



function fileHandler(){
    fs.stat('04-copy-directory/files-copy', function(err) {
   if (err) {
            fs.mkdir('04-copy-directory/files-copy', (err) => {
                if(err) throw err;
            });
        }  
    });    
}
fileHandler()

fs.readdir('04-copy-directory/files', function(err, items) {
    if (err) throw err;
 
    for (let i=0; i<items.length; i++) {
        let a = items[i];
        fs.copyFile('04-copy-directory/files/'+a, '04-copy-directory/files-copy/'+a, err => {
            if(err) throw err; 
         });
    }

         fs.readdir('04-copy-directory/files-copy', function(err, itemsC) {
            if (err) throw err;
         
            for (let i=0; i<itemsC.length; i++) {

                if (!items.includes(itemsC[i])){
                    
                    fs.unlink('04-copy-directory/files-copy/'+itemsC[i], function(err){
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Файл удалён");
                        }
                    });
                
                }
            }})
}
)




