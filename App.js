const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//const host = "localhost";
const PORT = process.env.PORT || 9092;
const products = require('./Routers/products');
const statistics = require('./Routers/statistics');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/products', products);
app.use('/statistics', statistics);
mongoose.connect(process.env.SERVER_MONGO_URL).
    then(() => {
        app.listen(PORT, () => {
            console.log(`The service is running @ ${PORT}`);
        });
    }).catch(err => console.log('DB not connected'));