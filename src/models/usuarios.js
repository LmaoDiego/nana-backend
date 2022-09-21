import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
//FIXME: [NANA-153] El enpoint devuelve String en vez de Int (numeros)
export const Usuarios = sequelize.define('usuarios', {
    usr_codigo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    usr_nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    usr_correo: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: "usr_correo"
    },
    usr_nacimiento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    usr_codcolegiatura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usr_psswd: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    usr_type: {
      type: DataTypes.DECIMAL,
      default : 0
    }
  },{
    sequelize,
    tableName: 'usuarios',
    createdAt: true,
    updatedAt: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usr_codigo" },
        ]
      },
      {
        name: "usr_correo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usr_correo" },
        ]
      },
    ]
  });


