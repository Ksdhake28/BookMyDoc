const mongoose = require('mongoose')

const connectDB = (url) => {
  if (!url) {
    throw new Error('MongoDB connection URL is required')
  }

  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB