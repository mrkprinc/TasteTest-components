const mongoose = require('mongoose');
const ObjId = mongoose.Schema.Types.ObjectId;

const RecipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdAt: {type: Date, default: Date.now},
  versions: [{type: ObjId, ref: 'Version'}],
  active: {type: Boolean, default: true}
})

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;