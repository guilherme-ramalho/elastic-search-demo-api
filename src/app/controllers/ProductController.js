import { Client } from '@elastic/elasticsearch';
import Product from '../models/Product';

const elastic = new Client({ node: 'http://localhost:9200' });
class ProductController {
  async insert(request, response) {
    try {
      const product = await Product.create(request.body);

      if (product) {
        const { resp } = await elastic.create({
          index: 'products',
          id: product.id,
          body: product,
        });
      }

      return response.json({
        data: product,
        meta: {
          status: 'success',
          message: 'Successfully inserted registers',
        },
      });
    } catch (exception) {
      return response.json({
        meta: {
          status: 'error',
          message: 'Something went wrong on the server',
          errorMessage: exception.message,
        },
      });
    }
  }

  async search(request, response) {
    try {
      const { search } = request.params;

      const { body } = await elastic.search({
        index: 'products',
        size: 20,
        from: 0,
        query: {
          match: { description: { query: search } },
        },
      });

      // const indices = await elastic.cat.indices({ v: true });

      // console.log(indices);

      const products = await Product.findAll();

      return response.json({
        data: products,
        meta: {
          status: 'success',
          message: 'Successfully selected registers',
          count: products.length,
        },
      });
    } catch (exception) {
      return response.json({
        meta: {
          status: 'error',
          message: 'Something went wrong on the server',
          errorMessage: exception.message,
        },
      });
    }
  }
}

export default new ProductController();
