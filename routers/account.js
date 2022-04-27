const express = require("express");
const { pool } = require("../db/db");
const db = require("../db/db");
const { generateAccessToken, generateRefreshToken } = require("../jwt/jwt");
const router = express.Router();
// const bcrypt = require("bcrypt");

router.post("/login", (req, res) => {
  const { user_id, user_pw } = req.body;
  console.log("user_id::", user_id);
  console.log("user_pw::", user_pw);
  const userId = `select user_id from person where user_id='${user_id}'`;
  pool.query(userId, (err, result) => {
    if (err) {
      console.log(`Error발생 시간::${new Date()}::${err}`);
    }
    console.log(result);
    let accessToken = generateAccessToken(user_id);
    let refreshToken = generateRefreshToken(user_id);
    res
      .status(200)
      .json({ userId: result[0].user_id, ac: accessToken, rf: refreshToken });
  });
});

module.exports = router;
