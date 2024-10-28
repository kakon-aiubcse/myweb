// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
console.log("MongoDB URI:", uri);

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const client = new MongoClient(uri);
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to prevent reinitializing MongoDB connection on hot reloads
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect().catch((err) => {
      console.error("MongoDB connection error:", err);
      throw err;
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a fresh MongoDB connection each time
  clientPromise = client.connect().catch((err) => {
    console.error("MongoDB connection error:", err);
    throw err;
  });
}

export default clientPromise;
