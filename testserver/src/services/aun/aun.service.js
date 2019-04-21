// Initializes the `aun` service on path `/aun`
const createService = require('./aun.class.js');
const hooks = require('./aun.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/aun', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('aun');

  service.hooks(hooks);
};
