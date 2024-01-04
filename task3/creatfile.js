const fs = require('fs');


fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        console.error('Error :', err);
    } else {
        console.log('File "welcome.txt" ');
    }
});
