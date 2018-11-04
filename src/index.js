import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();

mongoose.connect('mongodb://bajra:bajra030393@ds227352.mlab.com:27352/account');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(8000, function() {
  console.log('Server is running at : http://localhost:8000');
});
