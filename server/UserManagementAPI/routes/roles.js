const express = require("express");
// import Ctrlrs from "./controllers";
const {
  get,
  getAll,
  search,
  create,
  remove,
  update
} = require("./controllers/role.controller");

const router = express.Router();

// router.get("/:id", get);
router.get(/^\/(\d+)$/, get);
router.get("/:from/:to", getAll);
router.get("/", getAll);
router.get("/search", search);
router.post("/", create);
router.put(/^\/(\d+)$/, update);
router.delete(/^\/(\d+)$/, remove);

module.exports = router;
