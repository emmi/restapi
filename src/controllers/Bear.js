import Bear from '../models/bear';
import { replyFunction } from '../utils/reply';

export const sum = (a, b) => {
    return a + b;
};

const bearFunction = {
    handler: (request, reply) => {
        Bear.find(function(err, bears) {
            replyFunction(reply, err, bears);
        });
    }
};

const addBearFunction = {
    handler: (request, reply) => {
        const bear = new Bear();
        bear.name = request.body.name;

        bear.save(function(err) {
            replyFunction(reply, err, {message: 'Bear created'});
        });
    }
}

export default {
    bearFunction,
    addBearFunction
}