/**
 * Employee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  /*Attributes assumed to be employee_id, full_name, gender*/
  attributes: {
    employee_id : {
      type : 'string',
      required : 'true',
      unique : 'true'
    },
    full_name : {
      type : 'string',
      required : 'true'
    },
    gender : {
      type : 'string',
      enum : ['male', 'female', 'other']
    }

  }
};
