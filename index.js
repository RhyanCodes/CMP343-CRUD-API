const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

// Serve users page at /users
app.get('/users', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'users.html'))
})

// Serve single user page at /users/:id
app.get('/users/:id', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'user.html'))
})

// API endpoints
app.get('/api/users', db.getUsers)
app.get('/api/users/:id', db.getUserById)
app.post('/api/users', db.createUser)
app.put('/api/users/:id', db.updateUser)
app.delete('/api/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
