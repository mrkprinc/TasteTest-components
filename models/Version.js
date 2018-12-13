const mongoose = require('mongoose');
const ObjId = mongoose.Types.ObjectId;

const VersionSchema = new mongoose.Schema({
  recipe: ObjId,
  createdAt: {type: Date, default: Date.now},
  ingredients: [String],
  instructions: [String],
  active: {type: Boolean, default: true}
});

const Version = mongoose.model('Version', VersionSchema);

module.exports = Version;