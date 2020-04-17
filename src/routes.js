import { Router } from 'express';

import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.post('/product/insert', ProductController.insert);
routes.get('/product/search/:search', ProductController.search);

export default routes;
