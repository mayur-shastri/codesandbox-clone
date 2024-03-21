import mongoose from 'mongoose';

export async function connect(){
    try{
        mongoose.connect(process.env.MONGODB_URL);
        const connection = mongoose.connection;
        connection.on('open', ()=>{
            console.log('Database connected successfully!');
        });
        connection.on('error', (err)=>{
            console.log('MongoDB Connection Error: ', err);
        });
    } catch(err){
        console.log("Sonething went wrong: ", err);
    }
}