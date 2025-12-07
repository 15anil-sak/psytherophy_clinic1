const db = require('../config/db');

class Service {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }

  async save() {
    const sql = 'INSERT INTO services (name, description, price) VALUES (?, ?, ?)';
    const [result] = await db.execute(sql, [this.name, this.description, this.price]);
    this.id = result.insertId;
    return this;
  }

  static async getAll() {
    const sql = 'SELECT * FROM services';
    const [rows] = await db.execute(sql);
    return rows;
  }

  static async getById(id) {
    const sql = 'SELECT * FROM services WHERE id = ?';
    const [rows] = await db.execute(sql, [id]);
    return rows[0];
  }

  static async update(id, name, description, price) {
    const sql = 'UPDATE services SET name = ?, description = ?, price = ? WHERE id = ?';
    await db.execute(sql, [name, description, price, id]);
  }

  static async delete(id) {
    const sql = 'DELETE FROM services WHERE id = ?';
    await db.execute(sql, [id]);
  }
}

module.exports = Service;
