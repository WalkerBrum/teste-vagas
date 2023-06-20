const { StatusCodes } = require('http-status-codes');

const data =  require('../database/fakeData');

const updateUser = (req, res) => {
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

        const updateUser = data.find(objeto => objeto.name.toLowerCase().replace(' ', '') === name);

        if (!updateUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                errors: {
                    default: 'User not found.'
                }
            });
        }

        updateUser.name = req.body.name;
        updateUser.job = req.body.job;

        return res.status(StatusCodes.OK).send({
            message: 'User update with success.'
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
    updateUser
}