const { StatusCodes } = require('http-status-codes');

const data =  require('../../database/fakeData');

const validationUserPermission = (permission) => {
  return (req, res, next) => {
    try {
      const id = req.params.id;
  
      if (!id) {
        return res.status(StatusCodes.BAD_REQUEST).json({ 
          message: 'User id is required.' 
        });
      }
  
      const getUser = data.find(objeto => objeto.id == id);
  
      if (!getUser) {
        return res.status(StatusCodes.NOT_FOUND).json({ 
          message: 'User not found.' 
        });
      }
  
      const createUser = getUser.permissions.find(perm => perm === permission);
  
      if (createUser) {
        next();
      } else {
          return res.status(StatusCodes.BAD_REQUEST).json({ 
            message: `You are not allowed to ${permission} users.` 
        });
      }
  
    } catch (error) {
      console.log(error);
      
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: error
        }
      });
    }
  }
}

module.exports = {
  validationUserPermission
}