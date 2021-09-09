const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const seed = require('./seeders')

const app = express()
const port = 8989

app.use(express.static('public'))
app.use(routes)

app.set('view engine', 'njk')

nunjucks.configure('src/views', {
    express: app,
    autoescape: true,
    noCache: true
})

seed.up()

app.listen(port, () => console.log('Server is running...'))