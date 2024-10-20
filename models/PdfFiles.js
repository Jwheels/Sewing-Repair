// models/PdfFiles.js

module.exports = (sequelize, DataTypes) => {
    const PdfFiles = sequelize.define('PdfFiles', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data: {
            type: DataTypes.BLOB('long'),
            allowNull: false,
        }
    });

    PdfFiles.associate = (models) => {
        PdfFiles.hasMany(models.RepairRecord, {
            foreignKey: 'pdfFileId',
            as: 'repairRecords',
        });
    };

    return PdfFiles;
}