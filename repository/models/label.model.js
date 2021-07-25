module.exports = (SmartPallet, Sequelize) => {
    const Label = SmartPallet.define('label', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        number : {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        }
    });
    return Label;
}