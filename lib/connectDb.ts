import mongoose, { ConnectOptions, Mongoose } from 'mongoose';

const DATABASE_URL: string = process.env.DATABASE_URL!;

if (!DATABASE_URL) {
  throw new Error(
    'Please define the DATABASE_URL environment variable inside .env.local'
  );
}

interface CachedMongoose {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: CachedMongoose;
  namespace NodeJS {
    interface Global {
      mongoose: CachedMongoose;
    }
  }
}

let cached: CachedMongoose = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(DATABASE_URL, opts)
      .then((mongooseInstance) => {
        return mongooseInstance;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
