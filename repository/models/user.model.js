module.exports = (SmartPallet, Sequelize) => {
    const User = SmartPallet.define('user', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return User;
}