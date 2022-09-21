import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const ReportesFinalesBebes = sequelize.define('reporteFinalBebe', {
    rpf_codigo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    emb_codigo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'embarazos',
        key: 'emb_codigo'
      }
    },
    rpf_nombre: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    rpf_peso: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    rpf_status: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reporteFinalBebe',
    createdAt: true,
    updatedAt: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rpf_codigo" },
        ]
      },
      {
        name: "emb_codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "emb_codigo" },
        ]
      },
    ]
  });
