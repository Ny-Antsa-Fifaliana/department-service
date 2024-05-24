const Sequelize = require("sequelize");
const dotenv = require("dotenv")

dotenv.config()

const dialectOptions = process.env.NODE_ENV === 'production' ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }: null;


const sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {
        host: process.env.POSTGRES_HOST,
        dialect: "postgres",
        dialectOptions: dialectOptions
    }  
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/*
    Models/tables
*/
db.Department = require('./department.model.js')(sequelize, Sequelize);

/**
 * Relationships
 */

module.exports = db;