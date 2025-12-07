const db = require('../config/db');
const bcrypt = require('bcryptjs');

class User {
  constructor(name, email, password, role = 'patient') {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  async save() {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);

    const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
    const [result] = await db.execute(sql, [this.name, this.email, hashedPassword, this.role]);
    this.id = result.insertId;
    return this;
  }

  static async findByEmail(email) {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await db.execute(sql, [email]);
    return rows[0];
  }

  static async findById(id) {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [rows] = await db.execute(sql, [id]);
    return rows[0];
  }

  static async comparePassword(candidatePassword, hashedPassword) {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  }
}

module.exports = User;
