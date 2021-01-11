import mongoose from 'mongoose';

 export const Database= async ()  => {
     try{
        await mongoose.connect('mongodb+srv://steadfast:steadfasttask@cluster0.wskaj.mongodb.net/<dbname>?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
     }catch(error){
         return error
     }

};
