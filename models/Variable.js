const mongoose = require('mongoose');

const VariableSchema = new mongoose.Schema({
  category: String,
  number: Number,
  unit: String
});

const Variable = mongoose.model('Variable', VariableSchema);

module.exports = Variable;