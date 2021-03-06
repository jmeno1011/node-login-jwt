const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const PORT = process.env.PORT || 8000;
const home = require("./routers/home.js");
const user = require("./routers/account.js");
const pokemon = require("./routers/pokemon.js");
const { corsOption, sessionOption } = require("./utils/options");

app.use(helmet());
app.use(morgan("dev"));

// app.use(cors(corsOption));
app.use(cors());
app.use(session(sessionOption));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>home!</h1>");
});

app.use("/home", home);
app.use("/user", user);
app.use("/pokemon", pokemon);

app.listen(PORT, () => console.log(`${PORT}에 연결됨`));
