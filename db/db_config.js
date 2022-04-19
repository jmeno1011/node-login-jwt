exports.db_config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};
// DB_URL=mysql://${{ process.env.DB_USER }}:${{ process.env.DB_PASSWORD }}@${{ process.env.DB_HOST }}:${{ process.env.DB_PORT }}/${{ process.env.DB_DATABASE }}
exports.db_url = {
  url: process.env.DB_URL,
};

exports.db_pool_config = {
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
