import { app } from "./app.js";
import { connectDB } from "./data/database.js";


connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT} 💕🦖🐰`);
})