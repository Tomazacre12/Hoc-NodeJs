const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 2422
const path = require("path");
const exphbs = require("express-handlebars");
const { engine } = require("express-handlebars");

app.use(express.static(path.join(__dirname, 'public')))


app.use(morgan('combined'))

app.engine("hbs", engine({
  extname: '.hbs'
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render("home");
})
app.get('/news', (req, res) => {
  res.render("news");
})
app.get('/search', (req, res) => {
  console.log(req.query.q)
  res.render("search");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})