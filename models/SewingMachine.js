// models/SewingMachine.js

module.exports = (sequelize, DataTypes) => {
    const SewingMachine = sequelize.define('SewingMachine', {
        machineId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modelNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        serialNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        status: {
            type: DataTypes.ENUM('in service', 'out of service', 'in repair'),
            allowNull: false,
            defaultValue: 'in service',
        },
    });

    SewingMachine.associate = (models) => {
        SewingMachine.belongsTo(models.Customer, {
            foreignKey: 'customerId',
            as: 'owner',
        });

        SewingMachine.hasMany(models.RepairRecord, {
            foreignKey: 'sewingMachineId',
            as: 'repairRecords',
        });

        SewingMachine.belongsTo(models.MachineModel, {
            foreignKey: 'modelId',
            as: 'machineModel',
        });
    };

    return SewingMachine;
};
