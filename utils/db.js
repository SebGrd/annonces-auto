const mongoose = require('mongoose');
const clc = require('cli-color');
const logOk = clc.green.bold;
const logErr = clc.red.bold;


const Car = mongoose.model(
    'Car',
    {
        brand: String,
        model: String
    }
);
exports.carModel = Car;

const Annonce = mongoose.model(
    'Annonce',
    {
        _id: String,
        userId: String,
        content: String,
        price: Number,
        car: {
            brand: String,
            model: String,
            details: {
                version: String,
                color: String,
                places: Number,
                doors: Number,
                km: Number,
                energy: String,
                productionYear: Number,
                transmission: String,
                hp: Number,
                cf: Number
            }
        }
    }
);

exports.connect = () => {
    mongoose.connect(
        'mongodb+srv://' + process.env.MONGOUSER + ':' + process.env.MONGOPASS + '@' + process.env.MONGOURL + '/' + process.env.MONGO_DB_CARS,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(value => {
            console.log(logOk('MongoDB Connected'));
        })
        .catch(error => {
            console.log(logErr('DB Error\n') + error);
        });
};