const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

require('dotenv').config()

app.use(express.json())

// ✅ Your data added here
const posts = [
  {
    name: "Lakshmi Madhulika D-160124737144",
    title: "Welcome Lakshmi Madhulika"
  }.
  {
    name: "CBIT",
    title: "Welcome to CBIT"
  }
]

// ✅ Middleware to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403)

    req.user = user
    next()
  })
}

// ✅ Login route
app.post('/login', (req, res) => {
  const username = req.body.username

  // Important: same format as posts
  const user = { name: username }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)
  res.json({ token: accessToken })
})

// ✅ Protected route
app.get('/posts', authenticateToken, (req, res) => {
  const userPosts = posts.filter(post => post.name === req.user.name)
  res.json(userPosts)
})

// ✅ Start server
app.listen(3000, () => {
  console.log("Server running on port 3000")
})