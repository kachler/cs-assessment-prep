const mongoose = require('mongoose');
require('dotenv').config();

const { Schema } = mongoose;

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

const dataSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: false },

});

const Data = mongoose.model('data', dataSchema);

module.exports = Data;
