import { FIELDS } from "constants/emails";

const nodemailer = require('nodemailer');

export type T_MailOptions = {
  [key in (typeof FIELDS[number])['id']]: string
}

export const sendEmail = async (options: T_MailOptions) => {
    const testAccount = await nodemailer.createTestAccount();
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
      
      const mailOptions = {
        from: options.mail,
        to: 'navasardianimchael@gmail.com',
        subject: options.subject,
        text: options.message
      };
      
      transporter.sendMail(mailOptions, function(error: any, info: any){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
}