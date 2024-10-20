// config/config.js

require('dotenv').config(); // Load environment variables from .env file

module.exports = {
    development: {
        username: process.env.DB_USER || 'your_db_user',
        password: process.env.DB_PASS || 'your_db_password',
        database: process.env.DB_NAME || 'sewing_repair_db',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'postgres',
    },
    test: {
        username: process.env.DB_USER || 'your_test_db_user',
        password: process.env.DB_PASS || 'your_test_db_password',
        database: process.env.DB_NAME || 'sewing_repair_test_db',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: process.env.DB_USER || 'production_db_user',
        password: process.env.DB_PASS || 'production_db_password',
        database: process.env.DB_NAME || 'sewing_repair_prod_db',
        host: process.env.DB_HOST || 'production_db_host',
        dialect: 'postgres',
    },
};
