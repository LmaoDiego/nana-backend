import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const ConsultasMedicas = sequelize.define('ConsultaMedica', {
    cns_codigo: {
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
    cns_fechaConsulta: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cns_codObstetra: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'usr_codigo'
      }
    }
  }, {
    sequelize,
    tableName: 'ConsultaMedica',
    createdAt: true,
    updatedAt: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cns_codigo" },
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
        name: "cns_codObstetra",
        using: "BTREE",
        fields: [
          { name: "cns_codObstetra" },
        ]
      },
    ]
  });
