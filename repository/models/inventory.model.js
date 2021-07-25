module.exports = (SmartPallet, Sequelize) => {
    const Inventory = SmartPallet.define('inventory', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        qty: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return Inventory;
}