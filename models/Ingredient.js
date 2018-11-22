const mongoose = require('mongoose');
const ObjId = mongoose.Schema.Types.ObjectId;

const IngredientSchema = new mongoose.Schema({
  description: String,
  variables: [{type: ObjId, ref: 'Variable'}]
})

const Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;