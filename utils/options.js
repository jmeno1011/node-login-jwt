exports.corsOption = {
  origin: [
    // aws server
    // "https://yourapp.amplifyapp.com",
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
