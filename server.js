const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const { schema, resolvers } = require('./routes/graphQL/index');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 8080;

const server = new ApolloServer({ typeDefs: schema, resolvers });
server.applyMiddleware({ app, path: '/graphql' });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production') app.use(express.static('client/build'));
app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/taste-test';
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on('error', () => console.log('There was an error connecting to the database.'));
mongoose.connection.once('open', () => console.log('Database connection successful.'))

app.listen(PORT, () => {
  console.log(`-- server ready on port ${PORT} --`);
})