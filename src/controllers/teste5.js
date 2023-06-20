const { StatusCodes } = require("http-status-codes");

const data =  require('../database/fakeData');

const userReadTimes = async (req, res) => {
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

    const user = await data.find(objeto => objeto.name.toLowerCase().replace(' ', '') === name);

    if (!user) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'User not found.'
            }
        });
    }

    const message = `User ${user.name} was read ${user.countRead} ${user.countRead > 1 ? 'times' : 'time'}.`

    return res.status(StatusCodes.OK).json({
        message: message
    });
};

module.exports = {
    userReadTimes
}