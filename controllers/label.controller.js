const db = require('../repository/SmartPallet');
const Label = db.Label;

exports.create = (req, res) => {
    if(!req.body.number) {
        res.status(400).send({
            message: "Must provide a label number"
        });
    }

    const label = {
        name: req.body.number
    }

    Label.create(label)
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
    Label.findByPk(id)
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
    Label.findAll()
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

    Label.update(req.body, {
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

    Label.destroy({
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