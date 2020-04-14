import { Router } from 'express';

import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.get('/product/search', ProductController.search);

export default routes;
