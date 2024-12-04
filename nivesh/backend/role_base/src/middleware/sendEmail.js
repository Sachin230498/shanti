import nodemailer from "nodemailer";

const sendEmail = async (to, subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Change to "ethereal" if using Ethereal
      auth: {
        user: "aditipatel4m2@gmail.com", // Your Gmail address
        pass: "your-gmail-app-password", // Use App Password
      },
    });

    const mailOptions = {
      from: '"Todo-app" <sachinpathe123b@gmail.com>', // Sender email
      to, // Recipient(s)
      subject, // Subject line
      html: htmlContent, // Email content (HTML format)
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: %s", info.messageId); // Optional for tracking
  } catch (error) {
    console.error("Error sending email: ", error.message);
  }
};

export default sendEmail;
