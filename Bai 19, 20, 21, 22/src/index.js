const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 2004;
const path = require('path');
const exphbs = require('express-handlebars');
const { engine } = require('express-handlebars');

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(morgan('combined'));
// template engine
        app.engine(
          'hbs',
          engine({
            extname: '.hbs',
          }),
        );
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'resources/views'));

// routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
