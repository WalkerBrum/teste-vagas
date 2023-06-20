const { StatusCodes } = require('http-status-codes');

const data =  require('../database/fakeData');

const getUser = ( req, res ) => {
    try {
        let name =  req.query.name;

        if (name) {
            name.toLowerCase().replace(' ', '');
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                errors: {
                    default: 'The query name needs to be informed.'
                }
            });
        }

        const getUser = data.find(objeto => objeto.name.toLowerCase().replace(' ', '') === name);

        if (!getUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                errors: {
                    default: 'User not found.'
                }
            });
        }

        getUser.countRead++;

        return res.status(StatusCodes.OK).send(getUser);
        
    } catch (error) {
        console.log(error);
        
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: error
            }
        });
    }
};

const getUsers = ( req, res ) => {
    try {
        if (data.length > 0) return res.status(StatusCodes.OK).send(data);

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'No register found.'
            }
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
    getUser,
    getUsers
};