const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'XXX@gmail.com', 
        pass: 'aaaaabbbbb'   
    }
});

// Email options
const mailOptions = {
    from: 'your@gmail.com', 
    to: 'your@gmail.com',  
    subject: 'Email',
    text: 'This is a nodemailer.'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.error('Error:', error);
    }
    console.log('Email sent:', info.response);
});
