const nodemailer = require('nodemailer'); const sendgridTransport = require('nodemailer-sendgrid-transport');
;
const sgTransport = require('nodemailer-sendgrid-transport');
require('dotenv').config()


const transport = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: process.env.API_KEY
    }
}));


const sendEmail = (email, subject, html) => {

    const mailOptions = {
        from: "sender@example.com",
        to: email,
        subject,
        html
    };

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email send to ${email} : ${info.response}`);
        }
    })
};
const htmlcode = '<p>write html code to send your mail content</p>';

const emailList = [
    { email: 'receiver1@example.com'},
    { email: 'receiver2@example.com'},
    { email: 'receiver3@example.com'}
    ];


emailList.forEach((emailData) => {
    sendEmail(emailData.email, Subject, htmlcode);
});



