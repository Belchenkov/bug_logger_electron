const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const url = 'mongodb+srv://belchenkov:12qwasZX@cluster0-1owsl.mongodb.net/bug-logger-electron?retryWrites=true&w=majority';
        const conn = await mongoose.connect( url, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        );

        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;