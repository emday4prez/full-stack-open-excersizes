require('dotenv').config()

const PORT = process.env.PORT || 3003
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://fullstack:blackduck@cluster0.azx6x.mongodb.net/blogs?retryWrites=true&w=majority'

module.exports = {
  MONGODB_URI,
  PORT
}