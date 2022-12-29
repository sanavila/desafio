import sqlite3 from 'sqlite3';
import fs from 'fs';

const PATH = './database.db';
const existDb = fs.existsSync(PATH);
const db = new sqlite3.Database(PATH);

if (!existDb) {
    db.serialize(() => {
      //db.run("CREATE TABLE lorem (info TEXT)"); 
      db.run(`
        CREATE TABLE user (
          id TEXT,
          name TEXT,
          birth DATE,
          genre BOOLEAN, 
          image TEXT,
          email VARCHAR,
          phone INT,
          rg INT,
          cpf INT,
          cns INT
        )
      `);  
    });
    
    // db.close();
}

export default db;
