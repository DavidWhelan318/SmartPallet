const db = require('../repository/SmartPallet');
const Location = db.Location;

exports.create = (req, res) => {
    if(!req.body.name || !req.body.x || !req.body.y) {
        res.status(400).send({
            message: "Must provide a name and x/y coordinates"
        });
    }

    const location = {
        name: req.body.name,
        x: req.body.x,
        y: req.body.y
    }

    Location.create(location)
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
    Location.findByPk(id)
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
    Location.findAll()
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

    Location.update(req.body, {
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

    Location.destroy({
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