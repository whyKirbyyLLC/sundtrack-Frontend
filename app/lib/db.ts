import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

let cachedClient: MongoClient | null = null;

export async function getMongoClient() {
    if (cachedClient) {
        return cachedClient;
    }
    try {
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in the environment variables.");
        }
        const client = await MongoClient.connect(MONGODB_URI);
        cachedClient = client;
        return client;
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}

export async function closeConnection() {
    if (cachedClient) {
        await cachedClient.close();
        cachedClient = null;
    }
} 