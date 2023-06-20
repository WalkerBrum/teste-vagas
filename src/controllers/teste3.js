const { StatusCodes } = require('http-status-codes');

const data =  require('../database/fakeData');

const deleteUser = async (req, res) => {
    try {
        const name =  req.query.name;

        if (name) {
            name.toLowerCase().replace(' ', '');
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                errors: {
                    default: 'The query name needs to be informed.'
                }
            });
        }

        const deleteUser = await data.find(objeto => objeto.name.toLowerCase().replace(' ', '') === name);

        if (!deleteUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                errors: {
                    default: 'User not found.'
                }
            });
        }
        
        await data.splice(deleteUser.id - 1, 1);

        return res.status(StatusCodes.OK).json({
            message: 'User delete with success.'
        });

    } catch (error) {
        console.log(error);

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: error
            }
        });
    }
    
};

module.exports = {
    deleteUser
}