
const Razorpay = require("razorpay");
const nodemailer = require("nodemailer");

const razorpay = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});
const makePayment = async (req, res) => {
  const payment_capture = 1;
  const amount = 150;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: Math.random().toString(36).substring(2, length+2),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    sendRegistrationEmail(req.body.mail);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const sendRegistrationEmail = async (toEmail) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Cineaste" <jrragh@gmail.com>', // sender address
      to: toEmail,
      subject: "Hello", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { makePayment };
