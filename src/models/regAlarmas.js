import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const RegAlarmas = sequelize.define('reg_alarmas', {
    regA_codigo: {
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
    alrm_codigo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'alarmas',
        key: 'alrm_codigo'
      }
    },
    regA_fechaCreado: {
      type: DataTypes.DATE,
      allowNull: false
    },
    regA_razon: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reg_alarmas',
    createdAt: true,
    updatedAt: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "regA_codigo" },
        ]
      },
      {
        name: "emb_codigo",
        using: "BTREE",
        fields: [
          { name: "emb_codigo" },
        ]
      },
      {
        name: "alrm_codigo",
        using: "BTREE",
        fields: [
          { name: "alrm_codigo" },
        ]
      },
    ]
  });

