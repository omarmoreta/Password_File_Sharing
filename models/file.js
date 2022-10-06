const mongoose = require("mongoose");
const { Schema } = mongoose;

const fileSchema = new Schema({
  path: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  password: String,
  dowloadCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
