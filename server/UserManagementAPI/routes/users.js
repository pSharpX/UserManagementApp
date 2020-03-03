const express = require("express");
// import Ctrlrs from "./controllers";
const {
  get,
  getAll,
  getByUuid,
  search,
  create,
  remove,
  update
} = require("./controllers/user.controller");

const router = express.Router();

// router.get("/:id", get);
router.get(/^\/(\d+)$/, get);
router.get("/", getAll);
router.get("/search", search);
router.post("/", create);
router.put(/^\/(\d+)$/, update);
router.delete(/^\/(\d+)$/, remove);

module.exports = router;
