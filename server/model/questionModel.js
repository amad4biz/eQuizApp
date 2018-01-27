const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: {type: String},
  number: {type: Number, default: 0}
});

module.exports = mongoose.model("Question", questionSchema);
