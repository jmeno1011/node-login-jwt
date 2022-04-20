const express = require("express");
const { pool } = require("../db/db");
// const db = require("../db/db");
const router = express.Router();

router.get("/", (req, res) => {
  const userTable = "select * from pokemon";
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(userTable, (err, result) => {
      if (err) {
        console.log(`Error발생 시간::${new Date()}::${err}`);
      }
      res.status(200).json({ pokemon: result });
    });
    connection.release();
  });
});

module.exports = router;
