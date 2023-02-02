import express from 'express';
import {config} from 'dotenv';

config({
    path: './data/config.env'
})

export const app = express();

app.get('/', (req, res,next) => {
    res.send("Hello from express")
    });

// importing routers here 
import user from './routes/user.js';

app.use("/api/v1/user", user);
