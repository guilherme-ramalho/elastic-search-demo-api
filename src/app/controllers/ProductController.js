class ProductController {
  async search(request, response) {
    try {
      return response.json({ test: 'The test was successfull' });
    } catch (exception) {
      return response.json({
        meta: {
          status: 'error',
          message: 'Something went wrong on the server',
        },
      });
    }
  }
}

export default new ProductController();
