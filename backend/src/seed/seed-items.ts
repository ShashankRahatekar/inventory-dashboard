import { pool } from '../db';

const items = [
  {
    name: 'Dell Monitor 24"',
    description: 'Full HD IPS Display',
    category: 'Electronics',
    quantity: 15,
    price: 10500,
    status: 'in-stock'
  },
  {
    name: 'Wireless Mouse',
    description: 'Ergonomic design',
    category: 'Electronics',
    quantity: 4,
    price: 1500,
    status: 'low-stock'
  }
];

async function seedItems() {
  try {
    for (const item of items) {
      await pool.query(
        `INSERT INTO items (name, description, category, quantity, price, status)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [item.name, item.description, item.category, item.quantity, item.price, item.status]
      );
    }
    console.log('✅ Seeded items successfully!');
  } catch (err) {
    console.error('❌ Error seeding items:', err);
  } finally {
    await pool.end();
  }
}

seedItems();
