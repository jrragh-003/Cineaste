
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser'); // Add this line
const config = require('./config/config')

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json()); // Add this line

const reviewRoutes = require('./routes/reviewRoute')
app.use('/api',reviewRoutes)

const userRoutes = require('./routes/userRoute');
app.use('/api',userRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
