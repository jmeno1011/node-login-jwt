const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>home 입니다.</h1>");
});
