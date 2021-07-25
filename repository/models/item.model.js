module.exports = (SmartPallet, Sequelize) => {
    const Item = SmartPallet.define('item', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    });
    return Item;
}