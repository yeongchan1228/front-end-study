import { MongoClient } from "mongodb";

const MONGO_DB_URL: string = process.env.NEXT_PUBLIC_MONGO_DB_URL ?? "";

let connectDB;
const env: string = process.env.NODE_ENV;
if (env === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(MONGO_DB_URL).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(MONGO_DB_URL).connect();
}

export { connectDB };
