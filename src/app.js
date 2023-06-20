const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const usersRoutes = require('./routes/usersRoutes')

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use(usersRoutes);

const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});