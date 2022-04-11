const express = require("express");
const db = require("../db/db");
const router = express.Router();
// const bcrypt = require("bcrypt");

router.post("/login", (req, res) => {
  const { user_id, user_pw } = req.body;
  const userId = `select user_id from userTable where user_id='${user_id}'`;
  db.query(userId, (err, result) => {
    if (err) {
      console.log(`Error발생 시간::${new Date()}::${err}`);
    }
    console.log(result);
    res.status(200).json({ userId: result });
  });
});

module.exports = router;
