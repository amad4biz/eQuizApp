const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: {type: String},
  description: {type: String},
  active: {type: Boolean, default: false},
  questions: {type: [mongoose.SchemaTypes.ObjectId], default: [], ref: 'Question'}
});

module.exports = mongoose.model("Quiz", quizSchema);
