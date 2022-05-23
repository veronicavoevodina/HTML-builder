const fs = require('fs');
let path = require('path');


function fileHandler(){
    fs.stat('06-build-page/project-dist', function(err) {
   if (err) {
            fs.mkdir('06-build-page/project-dist', (err) => {
                if(err) throw err;
            });
        }  
    });    
}
fileHandler() // создала папку project-dist




let arrForRepl = [];
 fs.readFile('06-build-page/template.html', 'utf-8', 
 function(error,tempData){
    
     if(error) throw error;
     fs.writeFile('06-build-page/project-dist/index.html', tempData, function(error){
        if(error) throw error; 
    });
    fs.writeFile('06-build-page/project-dist/style.css', " ", function(error){
        if(error) throw error; 
    });
    const output = fs.createWriteStream("06-build-page/project-dist/style.css");  
fs.readdir("06-build-page/styles", {withFileTypes: true}, function(err, items) {
    
    fs.truncate("06-build-page/project-dist/style.css", err => {
        if(err) throw err; 
     });

    for (let i=0; i<items.length; i++) {
        let item = items[i];
        if (path.extname(item.name)===".css"){ 
        let input = fs.createReadStream("06-build-page/styles/"+item.name, 'utf-8');
    input.pipe(output);            
        }
    }})
});



        fs.readdir('06-build-page/components', {withFileTypes: true}, function(err, compFolder) {
          
            if(err) throw error;
            
           
for (let i=0;i<compFolder.length; i++) {
    let whatToRepl = "{{"+ compFolder[i].name.substring(0, compFolder[i].name.length-5) + "}}";

 
    arrForRepl.push(whatToRepl);
   
}

fs.readdir('06-build-page/components',  function(err, compFolder) {
    if(err) throw err;   
   
    if (arrForRepl.length === 3) {
                    fs.readFile('06-build-page/components/articles.html', "utf8", function(error,dataForRepl){
                        if(error) throw error;

                        fs.readFile('06-build-page/components/footer.html', "utf8", function(error,dataForRepl1){
                            if(error) throw error;

                            fs.readFile('06-build-page/components/header.html', "utf8", function(error,dataForRepl2){
                                if(error) throw error;
                        
                        fs.readFile('06-build-page/project-dist/index.html', function(err, data) {
                            if(err) throw err;   
                data = data.toString();
               data = data.replace(arrForRepl[0], dataForRepl).replace(arrForRepl[1], dataForRepl1).replace(arrForRepl[2], dataForRepl2);
               fs.writeFile('06-build-page/project-dist/index.html', data, function(err) {
                err ;
            });
    
                    })

                })
            })
});
    }
    else if (arrForRepl.length === 4) {
        fs.readFile('06-build-page/components/about.html', "utf8", function(error,dataForRepl0){
            if(error) throw error;
            
        fs.readFile('06-build-page/components/articles.html', "utf8", function(error,dataForRepl){
            if(error) throw error;

            fs.readFile('06-build-page/components/footer.html', "utf8", function(error,dataForRepl1){
                if(error) throw error;

                fs.readFile('06-build-page/components/header.html', "utf8", function(error,dataForRepl2){
                    if(error) throw error;
            
            fs.readFile('06-build-page/project-dist/index.html', function(err, data) {
                if(err) throw err;   
    data = data.toString();
   data = data.replace(arrForRepl[0], dataForRepl0).replace(arrForRepl[1], dataForRepl).replace(arrForRepl[2], dataForRepl1).replace(arrForRepl[3], dataForRepl2);
   fs.writeFile('06-build-page/project-dist/index.html', data, function(err) {
    err ;
});

        })

    })
})
});})
}


})
})
  

 /// создала индекс файл
 

function createAssets(){
    fs.stat('06-build-page/project-dist/assets', function(err) {
   if (err) {
            fs.mkdir('06-build-page/project-dist/assets', (err) => {
                if(err) throw err;
            });
        }  else {
            fs.readdir('06-build-page/project-dist/assets', function(err, assetsFolder) {
                if (err) throw err;                 
              for (let i=0; i<assetsFolder.length; i++) {
                               
            fs.readdir('06-build-page/project-dist/assets/'+assetsFolder[i], function(err, assetsFile) {
                      if (err) throw err;
                                            
                for (let j=0; j<assetsFile.length; j++) {
            
            fs.readdir('06-build-page/assets/'+assetsFolder[i], function(err, assetsFolderFirst) {
             if (err) throw err;
              if (!assetsFolderFirst.includes(assetsFile[j]))   {
               console.log(assetsFile[j])
            
               fs.unlink('06-build-page/project-dist/assets/'+assetsFolder[i]+"/"+assetsFile[j], function(err){
                   if (err) {
                       console.log(err);
                   } 
               });
            
              }  })  }})}})
        }
    });    
}

createAssets();

function createSubFolder(a){
    fs.stat('06-build-page/project-dist/assets/'+a, function(err) {
   if (err) {
            fs.mkdir('06-build-page/project-dist/assets/'+a, (err) => {
                if(err) throw err;
            });
        }  
    });    
}
createSubFolder('fonts');
createSubFolder('img');
createSubFolder('svg');
fs.readdir('06-build-page/assets', {withFileTypes: true}, function(err, items) {
    if (err) throw err;
   
    for (let i=0; i<items.length; i++) {
      
        fs.readdir('06-build-page/assets/'+items[i].name, {withFileTypes: true}, function(err, itemsSub) {
            if (err) throw err;
            
           

            for (let j=0; j<itemsSub.length; j++) {

                fs.copyFile('06-build-page/assets/'+items[i].name+"/"+itemsSub[j].name, '06-build-page/project-dist/assets/'+items[i].name+"/"+itemsSub[j].name, err => {
                    
                 });
            }}) 
    }     
   
})



        
    


        
       
     

