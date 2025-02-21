const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  src: { type: String, required: true },
  votes: { type: Number, required: true },
  category: { type: String, required: true }
})

module.exports = mongoose.model('Photo', photoSchema)
