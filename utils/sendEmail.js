const nodemailer = require('nodemailer');

const sendEmail = (data) => {

  return new Promise((resolve, reject) => {

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
          user:'bottomsup20221226@gmail.com',
          pass:'izbivqkiorzcnmau'
      }
    })

    const mail_configuration = {
      from: 'bottomsup20221226@gmail.com',
      to: 'bottomsup20221226@gmail.com',
      subject:'Alert! Product Order Request!',
      text: `${data} is getting low, please order more`
    }

    transporter.sendMail(mail_configuration, function(error, info){
      if(error){

        return reject({message: 'An error has occurred'})
      }
        return resolve({message:'Email sent successfully'})
    })
  }) 
}

module.exports = sendEmail;