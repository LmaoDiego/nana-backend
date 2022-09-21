import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const RegPeso = sequelize.define('regPeso', {
    regPs_codigo: {
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
    regPs_peso:{
      type: DataTypes.DECIMAL.UNSIGNED,
      allowNull: false
    },
    regPs_numSemana:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'regPeso',
    createdAt: true,
    updatedAt: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "regPs_codigo" },
        ]
      },
      {
        name: "emb_codigo",
        using: "BTREE",
        fields: [
          { name: "emb_codigo" },
        ]
      },
    ]
  });

