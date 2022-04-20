const express = require("express");
const { pool } = require("../db/db");
const db = require("../db/db");
const { authenticateAccessToken } = require("../jwt/jwt");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>home 입니다.</h1>");
});

// router.get("/test", authenticateAccessToken, (req, res) => {
router.get("/test", (req, res) => {
  // const userTable = "select * from userTable";
  const confirmTable = "SELECT * FROM barchart;";
  pool.query(confirmTable, (err, result) => {
    if (err) {
      console.log(`Error발생 시간::${new Date()}::${err}`);
    }
    res.status(200).json({ table: result });
  });
});

module.exports = router;
