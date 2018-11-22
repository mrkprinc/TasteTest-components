const mongoose = require('mongoose');
const ObjId = mongoose.Schema.Types.ObjectId;

const InstructionSchema = new mongoose.Schema({
  description: String,
  variables: [{type: ObjId, ref: 'Variable'}]
})

const Instruction = mongoose.model('Instruction', InstructionSchema);

module.exports = Instruction;