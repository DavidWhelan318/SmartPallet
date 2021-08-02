const roles = require('../config/permission.config');

exports.AdminOnly = (req, res, next) => {
        let userRole = req.user.role;
        if(userRole == roles.ADMIN)
            return next();
        res.status(403).send({message: 'User has wrong role'});
}