const fs = require('fs');


fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error :', err);
    } else {
        console.log('Content is "welcome.txt":', data);
    }
});
