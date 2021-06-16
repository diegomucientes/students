const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
// const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
 
require('./server/config/connectMongo')(); 

app.use(cors());


if (process.env.NODE_ENV !== 'production') {
  const allowCrossDomain = (req, res) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept, Cache-Control',
      );

      app.use(allowCrossDomain);
  };
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/user.routes')(app);
require('./server/routes/student.routes')(app);
 
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})