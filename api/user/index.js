const express = require("express");
const router = express.Router();

const { dbCall } = require("../../config/database");
const { getUser, createUser, updateUser, deleteUser } = require("../../services/user");

//Create user
router.post("/", async (req, res, next) => {
  const data = req?.body;

  const result = await dbCall(createUser, data).catch(console.error);
  res.status(200).json(result);
});

//Read user
router.get("/:name", async (req, res, next) => {
  const { name } = req?.params;

  const result = await dbCall(getUser, name).catch(console.error);
  res.status(200).json(result);
});

//Update user
router.post("/update/:name", async (req, res, next) => {
    const data = req?.body;
    const { name } = req?.params;

    const result = await dbCall(updateUser, name, data).catch(console.error);
    res.status(200).json(result);
});

//Delete user
router.get("/delete/:name", async (req, res, next) => {
  const { name } = req?.params;

  const result = await dbCall(deleteUser, name).catch(console.error);
  res.status(200).json(result);
});

module.exports = router;
