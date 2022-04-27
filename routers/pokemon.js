const express = require("express");
const { pool } = require("../db/db");
// const db = require("../db/db");
const router = express.Router();

router.get("/", (req, res) => {
  const userTable = "select * from pokemon";
    pool.query(userTable, (err, result) => {
      if (err) {
        console.log(`Error발생 시간::${new Date()}::${err}`);
      }
      res.status(200).json({ pokemon: result });
    });
});

module.exports = router;
