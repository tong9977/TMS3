const role = require('./role/role.service.js');
const user = require('./user/user.service.js');
const vehicle = require('./vehicle/vehicle.service.js');
const vehicletype = require('./vehicletype/vehicletype.service.js');
const job = require('./job/job.service.js');
const jobtype = require('./jobtype/jobtype.service.js');
const jobstatus = require('./jobstatus/jobstatus.service.js');
const jobitem = require('./jobitem/jobitem.service.js');
const trips = require('./trips/trips.service.js');
const unit = require('./unit/unit.service.js');
const product = require('./product/product.service.js');
const usertrip = require('./usertrip/usertrip.service.js');
const upload = require('./upload/upload.service.js');
const tripcommand = require('./tripcommand/tripcommand.service.js');
const usertripcommand = require('./usertripcommand/usertripcommand.service.js');
const jobtrip = require('./jobtrip/jobtrip.service.js');
const jobtripcommand = require('./jobtripcommand/jobtripcommand.service.js');
const blob = require('./blob/blob.service.js');
const joblog = require('./joblog/joblog.service.js');
const joblogtype = require('./joblogtype/joblogtype.service.js');
const todayjobcommand = require('./todayjobcommand/todayjobcommand.service.js');
const monthjobcommand = require('./monthjobcommand/monthjobcommand.service.js');
const alljobtotalcommand = require('./alljobtotalcommand/alljobtotalcommand.service.js');
const ratequestion = require('./ratequestion/ratequestion.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(role);
  app.configure(user);
  app.configure(vehicle);
  app.configure(vehicletype);
  app.configure(job);
  app.configure(jobtype);
  app.configure(jobstatus);
  app.configure(jobitem);
  app.configure(trips);
  app.configure(unit);
  app.configure(product);
  app.configure(usertrip);
  app.configure(upload);
  app.configure(tripcommand);
  app.configure(usertripcommand);
  app.configure(jobtrip);
  app.configure(jobtripcommand);
  app.configure(blob);
  app.configure(joblog);
  app.configure(joblogtype);
  app.configure(todayjobcommand);
  app.configure(monthjobcommand);
  app.configure(alljobtotalcommand);
  app.configure(ratequestion);
};
