const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class UserController {
  static register(req, res, next) {
    const { username, email, password } = req.body;
    if (username.includes(" ")) {
      res.status(400).json({ message: "Invalid username (must alphanumeric)" });
    } else {
      User.create({ username, email, password })
        .then((userCreate) => {
          res.status(201).json({
            id: userCreate.id,
            username: userCreate.username,
            email: userCreate.email,
          });
        })
        .catch((err) => {
          next(err);
        });
    }
  }

  static login(req, res, next) {
    const { email, password } = req.body;

    User.findOne({ where: { email } })
      .then((foundUser) => {
        if (foundUser) {
          const passwordCorect = comparePassword(password, foundUser.password);

          if (passwordCorect) {
            const payload = {
              id: foundUser.id,
              username: foundUser.username,
              email: foundUser.email,
            };

            const access_token = signToken(payload);
            res.status(200).json({
              id: foundUser.id,
              username: foundUser.username,
              email: foundUser.email,
              access_token: access_token,
            });
          } else {
            // res.status(400).json({ message: "Invalid Email / Password" });
            throw { name: "InvalidUserorPassword" };
          }
        } else {
          // res.status(400).json({ message: "Invalid Email / Password" });
          throw { name: "InvalidUserorPassword" };
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = UserController;
