const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// const accountSid = 'ACb66dcfd46009eda5e3ee13952d4a270c';
// const authToken = '225b5c59dfb79c5b80f36824de711a9d';
// const client = require('twilio')(accountSid, authToken);

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
