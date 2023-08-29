const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'smartrecycle.cdxsfqpk0zx5.us-east-1.rds.amazonaws.com',
  port:3306,
  user: 'admin',
  password: 'admin123',
  database: 'smartrecycle',
});

db.connect((error) => { 
    if (error) {
      console.error('Error connecting to the database ',error.message);
      return;
    }
    console.log('Connected to the database');
  });

module.exports = db;