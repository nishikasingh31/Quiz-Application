const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  text: String,
  isCorrect:{
    type: Boolean,
    default: false
  },

});

const questionSchema = new Schema({
  quizId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Quiz', required: true 
  },
  text: { 
    type: String, required: true, 
    maxlength: 300 
  },
  type: { 
    type: String, enum: ['single_choice', 'multiple_choice', 'text'], 
    required: true 
  },
  options: [optionSchema]
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
