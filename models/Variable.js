const mongoose = require('mongoose');

const VariableSchema = new mongoose.Schema({
  description: String,
  value: Number,
  unit: String,
  active: { type: Boolean, default: true }
})

const Variable = mongoose.model('Variable', VariableSchema);

module.exports = Variable;