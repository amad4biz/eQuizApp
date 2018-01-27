var express = require('express');
var router = express.Router();
var quizModel = require('../model/quizModel');
var questionModel = require('../model/questionModel');

/* GET one quiz by ID. */
router.get('/:id', function(req, res, next) {
  quizModel.findOne({_id: req.params.id})
    .populate({path: 'questions', model: 'Question'})
    .exec((err, data) => {
      res.json(data);
  });
});

/* GET quiz listing. */
router.get('/', function(req, res, next) {
  quizModel.find((err, data) => {
    res.json(data);
  });
});

/* ADD question to a quiz by ID. */
router.post('/:id/question', function(req, res, next) {
  let data = {
    title: req.body.title,
    number: req.body.number
  };
  let question = new questionModel(data);
  question.save((err, data) => {
    quizModel.findOneAndUpdate(
      {_id: req.params.id},
      {$push: {
        questions: data._id
      }},
      {new: true},
      (err, data) => {
        res.json(data);
    });
  });

});

/* ADD quiz. */
router.post('/', function(req, res, next) {
  let data = {
    title: req.body.title,
    description: req.body.description
  };
  let quiz = new quizModel(data);
  quiz.save((err, data) => {
    res.json(data);
  });
});
module.exports = router;
