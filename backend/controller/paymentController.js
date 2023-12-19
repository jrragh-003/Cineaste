const shortid = require('shortid')
const Razorpay = require('razorpay')

const razorpay = new Razorpay({
	key_id: 'rzp_test_w5gM0MlnOtBwFl',
	key_secret: 'u71SDuXyKWqpRa0cW5nU6paN'
});
const makePayment = async (req, res) => {
	const payment_capture = 1
	const amount = 150
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options);
		console.log(response);
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
	
module.exports = {makePayment}