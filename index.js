require('dotenv').config()  //to use env
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const listEndpoints = require('express-list-endpoints');

app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env['SERVER_PORT']
const routes = require('./routes/index');

app.use(express.json());
app.use('/api/', routes);

const server = app.listen(port, function () {
  console.log('Endpoints: \n', listEndpoints(app));
  console.log("server started on port " + port);
});
