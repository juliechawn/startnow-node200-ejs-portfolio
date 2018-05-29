const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const data = {
    person: {
      firstName: 'Julie',
      lastName: 'Hawn',
    }
  }
  res.render('index', data);
});

app.post('/thanks', (req, res) => {
  res.render('thanks', { index: req.body })
});

app.get("*", function(req,res){
  res.send("Error: No such page!");
});

app.get('/favicon.ico', (req, res) => res.status(204));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));