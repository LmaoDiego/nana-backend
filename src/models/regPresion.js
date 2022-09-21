import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const RegPresion = sequelize.define('regPresion', {
    regPr_codigo: {
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
    regPr_presionDia:{
      type: DataTypes.DECIMAL.UNSIGNED,
      allowNull: false
    },
    regPr_presionSis:{
        type: DataTypes.DECIMAL.UNSIGNED,
        allowNull: false
    },
    regPr_numSemana:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'regPresion',
    createdAt: true,
    updatedAt: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "regPr_codigo" },
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

