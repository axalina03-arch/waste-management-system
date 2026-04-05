import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017'; // Update as per your database configuration
const dbName = 'wasteManagement'; // Change database name as needed

let db;

export const initDatabase = async () => {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('Connected to database');
        db = client.db(dbName);
        // Add your seeding logic here
        await seedDatabase();
    } catch (error) {
        console.error('Failed to connect to database:', error);
    } finally {
        await client.close();
    }
};

const seedDatabase = async () => {
    // Example seeding logic
    const collection = db.collection('users');
    const existingUsers = await collection.find().toArray();

    if (existingUsers.length === 0) {
        await collection.insertMany([
            { name: 'John Doe', email: 'john@example.com' },
            { name: 'Jane Smith', email: 'jane@example.com' }
        ]);
        console.log('Database seeded!');
    } else {
        console.log('Database already seeded.');
    }
};