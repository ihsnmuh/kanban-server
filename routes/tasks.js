const router = require("express").Router();
const TaskController = require("../controllers/TaskController");
const { authentication, authorization } = require("../middlewares/auth");

router.use(authentication);
router.get("/", TaskController.getAll);
router.post("/", TaskController.postTask);

router.use("/:id", authorization);
router.get("/:id", TaskController.getTaskById);
router.put("/:id", TaskController.putTaskById);
router.patch("/:id", TaskController.patchTaskById);
router.delete("/:id", TaskController.deleteTaskById);

module.exports = router;
