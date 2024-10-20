// models/Customer.js

module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        customerId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Customer.associate = (models) => {
        Customer.hasMany(models.SewingMachine, {
            foreignKey: 'customerId',
            as: 'machines',
        });
    };

    return Customer;
};
