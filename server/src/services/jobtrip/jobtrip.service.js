// Initializes the `jobtrip` service on path `/jobtrip`
const createService = require('feathers-objection');
const createModel = require('../../models/jobtrip.model');
const hooks = require('./jobtrip.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    model: Model,
    paginate,
    id:"JobId",
  };

  // Initialize our service with any options it requires
  app.use('/jobtrip', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('jobtrip');

  service.hooks(hooks);
};
