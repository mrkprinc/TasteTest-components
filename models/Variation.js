const mongoose = require('mongoose');
const ObjId = mongoose.Schema.Types.ObjectId;

const VariationSchema = new mongoose.Schema({
  createdAt: {type: Date, default: Date.now},
  createdByUserId: ObjId,
  ingredients: [{type: ObjId, ref: 'Ingredient'}],
  instructions: [{type: ObjId, ref: 'Instruction'}],
  active: {type: Boolean, default: true}
});

const Variation = mongoose.model('Variation', VariationSchema);

module.exports = Variation;