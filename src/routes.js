import { Router } from 'express';

import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.get('/product/insert', ProductController.search);
routes.get('/product/search/:search', ProductController.search);

export default routes;
