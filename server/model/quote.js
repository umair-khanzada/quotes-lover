const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  quote: { type: String, default: null, unique: true },
  author: { type: String, default: null },
});

module.exports = mongoose.model("quotes", quoteSchema);