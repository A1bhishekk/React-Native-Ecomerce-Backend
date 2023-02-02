import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            dbName:"React-Native-Ecomerce",
        });
        console.log(`MongoDB connected 🐰: ${conn.connection.host},${conn.connection.name}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}