const express = require("express");
const { pool } = require("../db/db");
const { generateAccessToken, generateRefreshToken } = require("../jwt/jwt");
const router = express.Router();
// const bcrypt = require("bcrypt");

router.post("/login", (req, res) => {
  const { user_id, user_pw } = req.body;

  console.log("user_id::", user_id);
  console.log("user_pw::", user_pw);

  const userId = `select user_id from person where user_id='${user_id}'`;

  pool.query(userId, (err, result) => {
    if (!err) {
      console.log("result:: ",result);
      let accessToken = generateAccessToken(user_id);
      console.log("accessToken:: ",accessToken);
      let refreshToken = generateRefreshToken(user_id);
      console.log("refreshToken:: ",refreshToken);
      res
        .status(200)
        .json({ userId: result[0].user_id, ac: accessToken, rf: refreshToken });
    } else {
      console.log(`Error발생 시간::${new Date()}::${err}`);
    }
  });
});

router.get('/logout', (req, res)=>{
  res.status(200).send("logout 됨!");
})

module.exports = router;
