'use strict';
const nodemailer = require('nodemailer');
const config = require('./config')

const account = {
  user: config.accountUser,
  pass: config.accountPass
};

let transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: account.user, // generated ethereal user
    pass: account.pass // generated ethereal password
  }
});

// setup email data with unicode symbols
let mailOptions = {
  from: '"Lanseria vhik 👻" <root@limonplayer.cn>', // sender address
  to: '564265135@qq.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>' // html body
};

// send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log('Message sent: %s', info.messageId);
// });

exports = module.exports = transporter
