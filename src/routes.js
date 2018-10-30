import { 
    GET,
    POST
} from './utils/route';

import controllers from './controllers';

const {
    bear,
    home
} = controllers;

const routes = [
    GET('/', home.handlerFunction.handler),
    GET('/getBears', bear.bearFunction.handler),

    POST('/addBear', bear.addBearFunction.handler),
];

export default routes;

