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

app.listen(8080, () => {
  console.log('listening at http://localhost:8080');
});
