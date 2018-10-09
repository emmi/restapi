import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Bear from './models/bear';

let app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/bear_database'); 

let router = express.Router();

router.get('/', (request, response) => {
    response.send('Hello world!');
});

router.post('/bears', (request, response) => {
    const bear = new Bear();
    bear.name = request.body.name;
    bear.save(function(err) {
        if (err) {
            response.send(err);
        }

        response.json({message: 'Bear created!'});
    });
});

app.use('/', router);

app.listen(port, () => {
    console.log('I am listening on port ' + port);
});