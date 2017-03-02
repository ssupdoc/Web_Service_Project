/**
 * Manager.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  /*attributes assumed to be manager_id, full_name, gender*/
  attributes: {
    manager_id : {
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
