import { UUID } from "node:crypto";
import { Optional, Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database";

export interface User {
  id: UUID;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreationAttributes extends Optional<User, 'id' | 'createdAt' | 'updatedAt'> {}

export interface UserInstance extends Model<User, UserCreationAttributes>, User {}

export const User = sequelize.define<UserInstance, User>('User',
    {
        id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      role: {
        allowNull: false,
        type: DataTypes.ENUM('user','admin'),
        defaultValue: 'user'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      tableName: 'users',
      timestamps: true, 
    }
)