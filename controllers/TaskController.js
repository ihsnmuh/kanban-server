const { Task, User } = require("../models");

class TaskController {
  static getAll(req, res, next) {
    Task.findAll({
      include: [
        {
          model: User,
          attributes: ["username", "email"],
        },
      ],
    })
      .then((dataTask) => {
        res.status(200).json(dataTask);
      })
      .catch((err) => {
        next(err);
      });
  }

  static postTask(req, res, next) {
    let newTask = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      priority: req.body.priority,
      UserId: req.loggedUser.id,
    };

    Task.create(newTask)
      .then((dataTask) => {
        res.status(201).json(dataTask);
      })
      .catch((err) => {
        next(err);
      });
  }

  static getTaskById(req, res, next) {
    let id = +req.params.id;

    Task.findOne({
      where: { id: id },
      include: [
        {
          model: User,
          attributes: ["username", "email"],
        },
      ],
    })
      .then((foundTask) => {
        if (!foundTask) {
          throw { name: "Not Found" };
        }
        res.status(200).json(foundTask);
      })
      .catch((err) => {
        next(err);
      });
  }

  static putTaskById(req, res, next) {
    let id = +req.params.id;
    let updateTask = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      priority: req.body.priority,
    };

    Task.update(updateTask, {
      where: { id: id },
      returning: true,
    })
      .then((updatedTask) => {
        if (!updatedTask) {
          throw { name: "Not Found" };
        } else {
          res.status(200).json(updatedTask[1][0]);
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static patchTaskById(req, res, next) {
    let id = +req.params.id;
    let updateCategory = {
      category: req.body.category,
    };

    Task.update(updateCategory, {
      where: { id: id },
      returning: true,
    })
      .then((updatedCategory) => {
        if (!updatedCategory) {
          throw { name: "Not Found" };
        } else {
          res.status(200).json(updatedCategory[1][0]);
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static deleteTaskById(req, res, next) {
    let id = +req.params.id;
    Task.destroy({
      where: { id: id },
    })
      .then((deletedTask) => {
        if (!deletedTask) {
          throw { name: "Not Found" };
        } else {
          res.status(200).json({ message: "Task success to delete" });
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = TaskController;
