const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const services = [
  { name: 'Orthopedic Physiotherapy', description: 'Treatment for musculoskeletal injuries involving bones, joints, ligaments, and tendons.', price: 50.00 },
  { name: 'Neurological Rehabilitation', description: 'Specialized therapy for conditions like Stroke, Multiple Sclerosis, and Parkinson\'s disease.', price: 65.00 },
  { name: 'Sports Injury Management', description: 'Expert care for athletes to recover from injuries and improve performance.', price: 55.00 },
  { name: 'Geriatric Physiotherapy', description: 'Helping seniors maintain mobility, balance, and independence in daily activities.', price: 45.00 },
  { name: 'Pediatric Physiotherapy', description: 'Gentle and effective therapy for children with developmental or mobility challenges.', price: 40.00 },
  { name: 'Post-Operative Rehabilitation', description: 'Crucial recovery programs following orthopedic surgeries like hip or knee replacements.', price: 50.00 },
  { name: 'Cardiopulmonary Physiotherapy', description: 'Rehabilitation for patients with heart and lung conditions to improve endurance.', price: 60.00 },
  { name: 'Vestibular Rehabilitation', description: 'Specialized exercises to treat balance disorders and dizziness.', price: 55.00 },
  { name: 'Pelvic Floor Physiotherapy', description: 'Specialized care for pelvic health, including prenatal and postpartum support.', price: 65.00 },
  { name: 'Manual Therapy', description: 'Hands-on techniques including joint mobilization and soft tissue massage.', price: 45.00 },
  { name: 'Acupuncture & Dry Needling', description: 'Using fine needles to relieve muscle tension and chronic pain.', price: 40.00 },
  { name: 'Ergonomic Assessment', description: 'Consultation to optimize your workspace and prevent posture-related pain.', price: 35.00 },
  { name: 'Chronic Pain Management', description: 'Multi-faceted approach to managing long-term pain conditions like Fibromyalgia.', price: 55.00 },
  { name: 'Traction Therapy', description: 'Decompressing the spine to treat herniated discs and sciatica.', price: 30.00 },
  { name: 'Home Visit Physiotherapy', description: 'Professional physiotherapy care delivered in the comfort of your own home.', price: 85.00 },
];

const seedDB = async () => {
  try {
    const connString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/physiotherapy_clinic';
    await mongoose.connect(connString);
    console.log(`Connected to MongoDB at ${connString} for seeding...`);

    await Service.deleteMany();
    console.log('Services cleared.');

    await Service.insertMany(services);
    console.log('Services seeded successfully.');

    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
