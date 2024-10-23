// models/RepairRecord.js

module.exports = (sequelize, DataTypes) => {
    const RepairRecord = sequelize.define('RepairRecord', {
        recordId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        issue: {
            type: DataTypes.TEXT
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        workDone: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        cost: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    });

    RepairRecord.associate = (models) => {
        RepairRecord.belongsTo(models.SewingMachine, {
            foreignKey: 'sewingMachineId',
            as: 'sewingMachine',
        });

        RepairRecord.belongsTo(models.Customer, {
            foreignKey: 'customerId',
            as: 'customer',
        });
    };

    return RepairRecord;
}