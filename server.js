const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(routes);

app.listen(PORT, () => {
  console.log(`-- server ready on port ${PORT} --`);
})