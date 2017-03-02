
/*verifyAdmin : Policy for verifying admin's token for root access*/

module.exports = function(req, res, next) {
  var jwt = require('jsonwebtoken');
  token = req.param('token');

  //If token is passed
  if(token) {
    jwt.verify(token, 'aeiou&tati5y0u', function(err, decoded) {
      if(err) {
        console.log(err);
        return res.status(401).json({error : "Invalid token"});
      }

      //if adminId exists in jwt
      if(decoded.adminId) {
        Admin.findOne({id : decoded.adminId}).exec(function(err, response) {
          if(err) {
            console.log(err);
            return res.status(400).json({error : "Database Error"});
          }

          //if adminId exists in database
          if(response) {
            req.user = response;
            return next();
          }
          else {
            return res.status(404).json({error : "Admin not found"});
          }
        });
      }
      //If the token is valid but the payload is not as required
      else {
        return res.status(401).json({error : "Unauthorized Token"});
      }
    });
  }
  else {
    return res.status(401).json({error : "Token Missing"});
  }
}
