"use strict";
const { hashPassword } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: {
          msg: `Username already exists!`,
        },
        validate: {
          notEmpty: {
            args: true,
            msg: `Username is required!`,
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: `Username already exists!`,
        },
        validate: {
          notEmpty: {
            args: true,
            msg: `Username is required!`,
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: `Password is required!`,
          },
          len: {
            args: [6, 100],
            msg: `Password more than 6 characters`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (user) => {
          user.password = hashPassword(user.password);
        },
      },
    }
  );
  return User;
};
