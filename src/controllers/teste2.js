const { StatusCodes } = require('http-status-codes');

const data =  require('../database/fakeData');
const { createId } = require('../shared/services/services');

 const createUser = async (req, res) => {
    try {
        const id = await createId();   
        const name =  req.body.name;
        const job =  req.body.job;
        const permissions = req.body.permissions;

        if (!name || !job) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                errors: {
                    name: 'Name and job are required'
                }
            });
        }

        if (!permissions || !(permissions instanceof Array)) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                errors: {
                    permissions: 'Permissions is required and must be an array'
                }
            });
        }
    
        const newUser = {
            id: id,
            name: name,
            job: job,
            permissions: permissions,
            countRead: 0
        }

        await data.push(newUser);
    
        return res.status(StatusCodes.CREATED).json({
            message: 'User created with success.'
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
    createUser
}