/* eslint-disable no-unused-vars */
const errors = require('@feathersjs/errors');

class Service {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    let result = false; 

    let userId = data.UserId;
    let tripId = data.TripId;

    const userTrip = require('../../models/usertrip.model')();
    const user = require('../../models/user.model')();
    const trip = require('../../models/trips.model')();

    try {
      let u = await user.query().where('Id', userId);
      let t = await trip.query().where('Id', tripId);
      let ut = await userTrip.query().where('UserId', userId).where('TripId',tripId);

      if(u.length == 0){
        //ออก เพราะส่งมาเป็น Array return Promise.reject(new errors.BadRequest('ไม่พบ user นี้อยู่ในระบบ'));
      }

      if(t.length == 0){
        return Promise.reject(new errors.BadRequest('ไม่พบ trip นี้อยู่ในระบบ'));
      }

      if (u.length != 0 && t.length != 0) {

        if(ut.length == 0){
          await userTrip.query().insert({ UserId: userId, TripId: tripId, TripDate: t[0].TripDate });
          result = true;
        }else{
          return Promise.reject(new errors.BadRequest('มี user นี้อยู่แล้ว'));
        } 
      }
    } catch (err) {
      return 0;
    }

    return result;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    let userId = params.query.UserId;
    let tripId = params.query.TripId;

    const userTrip = require('../../models/usertrip.model')();
    const numberOfDeletedRows = await userTrip.query().delete().where('UserId', userId).where('TripId', tripId);

    console.log('removed', numberOfDeletedRows, 'รายการ');

    return { numberOfDeletedRows };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
