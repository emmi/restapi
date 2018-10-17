import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes';

let app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/bear_database'); 

app.use('/', routes);

app.listen(port, () => {
    console.log('I am listening on port ' + port);
});