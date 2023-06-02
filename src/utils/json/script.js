const fs = require('fs');

const files = fs.readdirSync('../recursos/for play');

const images = {}

files.forEach(file => {
    const name = file.split('.')[0];
    const url = `recursos/${file}`;

    images[name] = url;
})

fs.writeFile('ForPlay.json', JSON.stringify(images), () => {
    console.log('JSON creado!');
})