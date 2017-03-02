
/*verifyModerator : Policy for verifying whether the user is Administrator or Manager to view/edit/delete employees*/

module.exports = function(req, res, next) {
  var jwt = require('jsonwebtoken');
  var token = req.param('token');
  //If token is passed
  if(token) {
    jwt.verify(token, 'aeiou&tati5y0u', function(err, decoded) {
      if(err) {
        console.log(err);
        return res.status(401).json({error : "Invalid token"});
      }

      //If adminId exists in jwt
      if(decoded.adminId) {
        Admin.findOne({id : decoded.adminId}).exec(function(err, response) {
          if(err) {
            console.log(err);
            return res.status(400).json({error : "Database Error"});
          }

          //If adminId exists in database
          if(response) {
            req.user = response;
            return next();
          }
          else {
            return res.status(404).json({error : "Administrator not found"});
          }
        });
      }
      //If managerId exists in jwt
      else if(decoded.managerId) {
        Manager.findOne({id : decoded.managerId}).exec(function(err, response) {
          if(err) {
            console.log(err);
            return res.status(400).json({error : "Database Error"});
          }

          //If managerId exists in database
          if(response) {
            req.user = response;
            return next();
          }
          else {
            return res.status(404).json({error : "Manager not found"});
          }
        });
      }
      //If token is valid but payload not as required
      else {
        return res.status(401).json({error : "Unauthorized Token"});
      }
    });
  }
  else {
    return res.status(401).json({error : "Token Missing"});
  }
}
