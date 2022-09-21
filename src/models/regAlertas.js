import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';


export const RegAlertas = sequelize.define('regAlertas', {
    regE_codigo: {
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
    alrt_codigo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'alertas',
        key: 'alrt_codigo'
      }
    },
    regE_fechaCreado: {
      type: DataTypes.DATE,
      allowNull: false
    },
    regE_razon: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'regAlertas',
    createdAt: true,
    updatedAt: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "regE_codigo" },
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
        name: "alrt_codigo",
        using: "BTREE",
        fields: [
          { name: "alrt_codigo" },
        ]
      },
    ]
  });

