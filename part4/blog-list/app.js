const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

mongoose.connect(config.MONGODB_URI,  { useNewUrlParser: true } )
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })
logger.info('connecting to', config.MONGODB_URI)
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
// app.use(middleware.tokenExtractor)
// app.use(middleware.userExtractor)
app.use(middleware.requestLogger)
app.use('/api/login', middleware.tokenExtractor, loginRouter )
app.use('/api/users', usersRouter)
app.use('/api/blogs', middleware.tokenExtractor, middleware.userExtractor,blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app