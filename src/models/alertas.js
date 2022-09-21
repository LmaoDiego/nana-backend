import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Alertas = sequelize.define('alertas', {
    alrt_codigo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    alrt_descripcion: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    alrt_prioridad: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    alrt_tipo: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    alrt_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'alertas',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "alrt_codigo" },
        ]
      },
    ]
  });
