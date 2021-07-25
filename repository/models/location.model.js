module.exports = (SmartPallet, Sequelize) => {
    const Location = SmartPallet.define('location', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        x: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        y: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return Location;
}