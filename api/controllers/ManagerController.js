/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/* Create instance of jsonwebtoken*/
var jwt = require('jsonwebtoken');

module.exports = {

  /*createManager : {post} params: manager_id: Manager Identity, full_name: Manager Full Name, gender: Gender of the manager_id
    Administrators can create managers*/
    //route : /admin/create/manager
  createManager : function(req, res) {
    var managerDetails = {
      manager_id : req.param('manager_id'),
      full_name : req.param('full_name'),
      gender : req.param('gender')
    };
    Manager.create(managerDetails).exec(function(err, response) {
      if(err) {
        console.log(err);
        return res.status(400).json({error : 'There seems to be a problem involving the database.'});
      }

      var payload = {
        issuer : 'web_service',
        managerId : response.id
      };
      var token = jwt.sign(payload, "aeiou&tati5y0u");
      response.token = token;

      delete response.id;
      return res.json(response);
    });
  }

};
