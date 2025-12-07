const db = require('../config/db');

class Appointment {
  constructor(patient_id, service_id, appointment_date, description, patient_name, mobile_number, patient_email, status = 'scheduled') {
    this.patient_id = patient_id;
    this.service_id = service_id;
    this.appointment_date = appointment_date;
    this.description = description;
    this.patient_name = patient_name;
    this.mobile_number = mobile_number;
    this.patient_email = patient_email;
    this.status = status;
  }

  async save() {
    const sql = 'INSERT INTO appointments (patient_id, service_id, appointment_date, description, patient_name, mobile_number, patient_email, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const [result] = await db.execute(sql, [this.patient_id, this.service_id, this.appointment_date, this.description, this.patient_name, this.mobile_number, this.patient_email, this.status]);
    this.id = result.insertId;
    return this;
  }

  static async getAll() {
    const sql = `
      SELECT a.id, a.appointment_date, a.status, a.patient_name, s.name as service_name
      FROM appointments a
      JOIN users u ON a.patient_id = u.id
      JOIN services s ON a.service_id = s.id
    `;
    const [rows] = await db.execute(sql);
    return rows;
  }

  static async getById(id) {
    const sql = `
      SELECT a.id, a.appointment_date, a.status, u.name as patient_name, s.name as service_name
      FROM appointments a
      JOIN users u ON a.patient_id = u.id
      JOIN services s ON a.service_id = s.id
      WHERE a.id = ?
    `;
    const [rows] = await db.execute(sql, [id]);
    return rows[0];
  }

  static async update(id, status) {
    const sql = 'UPDATE appointments SET status = ? WHERE id = ?';
    await db.execute(sql, [status, id]);
  }

  static async delete(id) {
    const sql = 'DELETE FROM appointments WHERE id = ?';
    await db.execute(sql, [id]);
  }
}

module.exports = Appointment;
