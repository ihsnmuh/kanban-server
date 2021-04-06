const router = require("express").Router();
const TaskRouter = require("./tasks");
const UserRouter = require("./user");

router.use("/", UserRouter);
router.use("/task", TaskRouter);

module.exports = router;
