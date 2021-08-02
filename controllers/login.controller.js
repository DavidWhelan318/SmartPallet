const jwt = require('jsonwebtoken');

exports.jsonwebtoken = (req, res) => {
    var token = jwt.sign(req.user, process.env.SECRETKEY, {expiresIn: '1d'});
    res.send(token);
}