const { ConsoleWriter } = require('istanbul-lib-report')
const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const Blog = require('../models/blog')
const api = supertest(app)

// const initialBlogs = [
//   {
//     _id: "5a422a851b54a676234d17f7",
//     title: "React patterns",
//     author: "Michael Chan",
//     url: "https://reactpatterns.com/",
//     likes: 7,
//     __v: 0
//   },
//   {
//     _id: "5a422aa71b54a676234d17f8",
//     title: "Go To Statement Considered Harmful",
//     author: "Edsger W. Dijkstra",
//     url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
//     likes: 5,
//     __v: 0
//   }  
// ]

beforeEach(async () => {
  await Blog.deleteMany({})

 for (let blog of helper.initialBlogs){
   const blogMongoObj = new Blog(blog)
   await blogMongoObj.save()
 }
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
},100000)

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body).toHaveLength(helper.initialBlogs.length)
})
// test('The unique identifier property of the blog posts is by default _id', async () => {
//     const blogs = await api.get('/api/blogs')
//      console.log(blogs)
//     expect(blogs.id).toBeDefined()
//   })

test('a valid post can be added', async () => {
  const newPost = 
    {
    
    "title": "react docs beta",
    "author": "Rachel Nabors",
    "url": "beta.reactjs.org",
    "likes": 100,
    "__v": 0
  }
  await api
    .post('/api/blogs')
    .send(newPost)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
 
})

test('note without name is not added', async () => {
  const newBlog = {
    likes: "12"
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)

  const blogsAtEnd = await helper.blogsInDb()


  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
})

test('a specific note can be viewed', async () => {
  const blogsAtStart = await helper.blogsInDb()
  const blogsToView = blogsAtStart[0]

  const resultBlog = await api
    .get(`/api/blogs/${blogsToView.id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const processedBlogToView = JSON.parse(JSON.stringify(blogsToView))

  expect(resultBlog.body).toEqual(processedBlogToView)  
})

describe('deletion of a blog', () => {
  test('succeeds with status code 204 if id is valid', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = blogsAtStart[0]

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)

    const blogsAtEnd = await helper.blogsInDb()

    expect(blogsAtEnd).toHaveLength(
      helper.initialBlogs.length - 1
    )

    const ids = blogsAtEnd.map(r => r.ids)

    expect(ids).not.toContain(blogToDelete.id)
  })
})


afterAll(() => {
  mongoose.connection.close()
})