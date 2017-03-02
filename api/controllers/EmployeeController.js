/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /*viewEmployeeById : {post} params: id The id Field of Employee collection
    Managers and Administrators can view Employees*/
    //route : /manager/view/employee
  viewEmployeeById : function(req, res) {
    Employee.findOne({id : req.param('id')}).exec(function(err, response) {
      if(err) {
        console.log(err);
        return res.status(400).json({error : "Database Error."});
      }

      if(response) {
        delete response.id;
        return res.json(response);
      }
      else {
        return res.status(404).json({error : "There are no Employees matching the credentials provided."});
      }
    });
  },

  /*editEmployee : {put} params: id The id Field of Employee collection and any field to edit
    Managers and Administrators can edit Employees*/
    //route : /manager/edit/employee
  editEmployee : function(req, res) {
    Employee.update({id : req.param('id')}, req.allParams()).exec(function(err, response) {
      if(err) {
        console.log(err);
        return res.status(400).json({error : "Database Error."});
      }

      if(response.length) {
        delete response[0].id;
        return res.json(response)
      }
      else {
        return res.status(404).json({error : "There are no Employees matching the credentials provided."});
      }
    });
  },

  /*deleteEmployee : {delete} params: id Thee id Field of Employee collection
    Managers and Administrators can delete Employees*/
    //route : /manager/delete/employee
  deleteEmployee : function(req, res) {
    Employee.destroy({id : req.param('id')}).exec(function(err, response){
      if(err) {
        console.log(err);
        return res.status(400).json({error : "Database Error."});
      }

      if(response.length) {
        delete response[0].id;
        return res.json(response);
      }
      else {
        return res.status(404).json({error : "There are no Employees matching the credentials provided."});
      }
    });
  }

};
