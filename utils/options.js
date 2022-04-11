exports.corsOption = {
  origin: [
    // aws server
    `${process.env.AWS_ORIGIN_URL}`,
    // local
    "http://localhost:3000",
  ],
  credentials: true,
  methods: "PUT, GET, POST, DELETE, OPTIONS",
};

exports.sessionOption = {
  secret: "@session-test",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    sameSite: "none",
    maxAge: 5300000,
    secure: true,
  },
};
