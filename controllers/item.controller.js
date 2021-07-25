const db = require('../repository/SmartPallet');
const Item = db.Item;

exports.create = (req, res) => {
    if(!req.body.name) {
        res.status(400).send({
            message: "Must provide an item name"
        });
    }

    const item = {
        name: req.body.name
    }

    Item.create(item)
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
    Item.findByPk(id)
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
    Item.findAll()
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

    Item.update(req.body, {
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

    Item.destroy({
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