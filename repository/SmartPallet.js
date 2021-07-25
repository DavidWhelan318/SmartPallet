const Sequelize = require('sequelize');

const SmartPallet = new Sequelize(process.env.DATABASE);

const db = {};

db.Sequelize = Sequelize;
db.SmartPallet = SmartPallet;

db.Item = require("./models/item.model")(SmartPallet, Sequelize);
db.Location = require("./models/location.model")(SmartPallet, Sequelize);
db.Label = require("./models/label.model")(SmartPallet, Sequelize);
db.Inventory = require("./models/inventory.model")(SmartPallet, Sequelize);

db.Location.hasOne(db.Inventory);
db.Inventory.belongsTo(db.Location, {
    foreignKey: {
        type: Sequelize.UUID,
        allowNull: false
    }
});

db.Label.hasOne(db.Inventory);
db.Inventory.belongsTo(db.Label, {
    foreignKey: {
        type: Sequelize.UUID,
        allowNull: false
    }
});

db.Item.hasMany(db.Inventory);
db.Inventory.belongsTo(db.Item, {
    foreignKey: {
        type: Sequelize.UUID,
        allowNull: false
    }
});

module.exports = db;