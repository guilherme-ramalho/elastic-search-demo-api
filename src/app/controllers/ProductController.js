import User from '../models/Product';

class ProductController {
  async search(request, response) {
    try {
      // const { search } = request.params;
      const users = await User.findAll();

      return response.json({
        data: users,
        meta: {
          status: 'success',
          message: 'Successfully selected registers',
          count: users.length,
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
