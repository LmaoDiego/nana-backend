import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';


export const Embarazos = sequelize.define('embarazos', {
    usr_codigo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'usr_codigo'
      }
    },
    emb_codigo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    emb_initSemana: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    emb_numSemana: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    emb_estado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      defaultValue: 0
    },
    emb_codObstetra: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'usr_codigo'
      }
    }
  }, {
    sequelize,
    tableName: 'embarazos',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "emb_codigo" },
        ]
      },
      {
        name: "usr_codigo",
        using: "BTREE",
        fields: [
          { name: "usr_codigo" },
        ]
      },
      {
        name: "emb_codObstetra",
        using: "BTREE",
        fields: [
          { name: "emb_codObstetra" },
        ]
      },
    ]
  });

