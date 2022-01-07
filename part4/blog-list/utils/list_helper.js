const dummy = (blogs) => {
return 1
}

const totalLikes = (blogPosts) => {
  let likes = 0;
  blogPosts.forEach(blog => likes+=blog.likes)
  return likes;
}

const favoriteBlog = (blogPosts) => {
  const max = blogPosts.reduce(function(prev, current) {
    return (prev.likes > current.likes) ? prev : current
})
return max;
}



module.exports = {
  dummy, totalLikes, favoriteBlog
}