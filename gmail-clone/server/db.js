import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-uv3l31x-shard-00-00.p54sdwj.mongodb.net:27017,ac-uv3l31x-shard-00-01.p54sdwj.mongodb.net:27017,ac-uv3l31x-shard-00-02.p54sdwj.mongodb.net:27017/?ssl=true&replicaSet=atlas-axo222-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;