const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const db = "SECRET_KEY";


// utworzenie aplikacji serwera
const app = express();

// połączenie z bazą danych
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (err) {
    console.error('Error: ' + err)
  } else {
    console.log('Connected to database');
  }
})

// ustawienia aplikacji serwera
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(flash());
// ustawienie portu
app.set('port', process.env.PORT || 3000);


// routes
app.use(express.static('../dist/Login-Panel'));
app.use('/home', express.static('../dist/Login-Panel'));
app.use('/event', express.static('../dist/Login-Panel'));
app.use('/special', express.static('../dist/Login-Panel'));
app.use('/', routes);



// włączenie serwera
const server = app.listen(app.get('port'), () => {
  console.log('Listening on ' + server.address().port);
})
