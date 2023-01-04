require('dotenv').config();

module.exports = {
  name: 'Vidly - Development',
  db: {
    name: 'Vidly Database',
    connectionString: process.env.VIDLY_DB_CONNECTION_STRING,
  },
  password: process.env.VIDLY_PASSWORD,
  port: process.env.VIDLY_PORT,
};
