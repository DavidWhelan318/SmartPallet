const bcrypt = require("bcryptjs");
const db = require('../repository/SmartPallet');
const User = db.User;

exports.create = (req, res) => {
    if(!req.body.username || !req.body.password || !req.body.role) {
        res.status(400).send({
            message: "Must have a complete user"
        });
    }

    const user = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 16),
        role: req.body.role
    }

    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
               message: err.message
            });
        });
};

exports.getOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.getAll = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:err.message
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    req.body.password = bcrypt.hashSync(req.body.password, 16);
    User.update(req.body, {
        where: {
            id: id
        }
    })
        .then(num => {
            if(num ==1){
                res.send({
                    message: "Update Successful"
                });
            }
            else{
                res.status(400).send({
                    message: "Can not update"
                });
            }
        })
        .catch(err => {
           res.status(500).send({
               message: err.message
           });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: {
            id: id
        }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot Delete`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};