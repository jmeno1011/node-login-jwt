const express = require("express");
const { pool } = require("../db/db");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>home 입니다.</h1>");
});

router.get("/test", (req, res) => {

  const confirmTable = "SELECT * FROM barchart;";

  pool.query(confirmTable, (err, result) => {
    if (err) {
      console.log(`Error발생 시간::${new Date()}::${err}`);
    }
    res.status(200).json({ table: result });
  });
});

router.get("/test/:state", (req, res) => {

  const state = req.params.state;
  
  const stateData = `SELECT * FROM barchart where state='${state}';`;
  
  pool.query(stateData, (err, result) => {
    if (err) {
      console.log(`Error발생 시간::${new Date()}::${err}`);
    }
    res.status(200).json({ table: result });
  });
});

module.exports = router;
