import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';


export const Alarmas = sequelize.define('alarmas', {
    alrm_codigo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    alrm_descripcion: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    alrm_prioridad: {
      type: DataTypes.INTEGER(5,0),
      allowNull: false
    },
    alrm_tipo: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    alrm_horario: {
      type: DataTypes.STRING(80),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'alarmas',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "alrm_codigo" },
        ]
      },
    ]
  });

