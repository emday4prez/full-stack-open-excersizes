const http = require('http')
const app = require('./app') // the actual Express application
const config = require('./utils/config')
const logger = require('./utils/logger')



// const Blog = mongoose.model('Blog', blogSchema)

// const mongoUrl = 'mongodb+srv://fullstack:blackduck@cluster0.azx6x.mongodb.net/blogs?retryWrites=true&w=majority'
// mongoose.connect(mongoUrl)

// app.use(cors())
// app.use(express.json())


const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`server running on port ${config.PORT}`)
})