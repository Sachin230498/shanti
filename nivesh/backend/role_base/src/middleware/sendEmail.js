import nodemailer from "nodemailer";

const sendEmail = async (to, subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Change to "ethereal" if using Ethereal
      auth: {
        user: "sachinpathe123b@gmail.com",
        pass: "zwwzkhfkaxmkonzv",
      },
      tls: {
        rejectUnauthorized: false, // Allows self-signed certificates
      },
    });

    const mailOptions = {
      from: 'Todo-app', // Sender email
      to, // Recipient(s)
      subject, // Subject line
      html: htmlContent, // Email content (HTML format)
    };


    console.log(mailOptions)

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: %s", info.messageId); // Optional for tracking
  } catch (error) {
    console.error("Error sending email: ", error.message);
  }
};

export default sendEmail;
