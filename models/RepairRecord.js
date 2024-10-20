// models/RepairRecord.js

module.exports = (sequelize, DataTypes) => {
    const RepairRecord = sequelize.define('RepairRecord', {
        recordId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        cost: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        pdfFileId: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'PdfFiles', // Name of the table that stores PDF files
                key: 'id',
            }
        }
    });

    RepairRecord.associate = (models) => {
        RepairRecord.belongsTo(models.SewingMachine, {
            foreignKey: 'sewingMachineId',
            as: 'sewingMachine',
        });
    };

    return RepairRecord;
}