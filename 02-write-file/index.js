const fs = require('fs');
const { stdin, stdout } = process;
function fileHandler(){

    fs.open('02-write-file/test.txt', 'a+', (err) => {
        if(err) throw err;
    });
    
}
function fileHandler2(data){
    let text = data.toString();
    if(text == 'exit\r\n') {  console.log("Всего хорошего! Заходи еще!"); process.exit(); }
    else{
    fs.appendFile('02-write-file/test.txt', data, (err) => {
        if(err) throw err;
           
    });
}

}
fileHandler();
stdout.write('добрый день! Введите текст.\r\n');
stdin.on('data', data => {
    fileHandler2(data);
    fileHandler3()
}
    );

function fileHandler3(){

    fs.readFile('02-write-file/test.txt', 'utf8', (err, data1) => {
        if(err) throw err;
        
    });

}

process.on('SIGINT', function () {
    console.log("Всего хорошего! Заходи еще!");
    process.exit(2);
  });
/*
stdin.on('data', data => {
fs.readFile('file.txt', 'utf8', function(error, fileContent){
    if(error) throw error; // ошибка чтения файла, если есть
    console.log(fileContent); // содержимое файла
    
    let toWrite = fileContent + 'Тише, мыши, кот на крыше';
 
    fs.writeFile('file.txt', toWrite, function(error){
       if(error) throw error; // ошибка чтения файла, если есть
       console.log('Данные успешно записаны записать файл');
    });
 });
    
})   

/*
fs.writeFile('text.txt', data => {
    stdout.write(data)
});*/
