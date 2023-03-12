import mongoose from 'mongoose'

let uri = 'mongodb+srv://nirha:1qaz1q@clusternir.o4sgd8w.mongodb.net/booksStore?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true'

export const ConnectToDatabase = async () => {
   await mongoose.connect(uri)
    .then(()=> console.log("Connected!!!"))
    .catch((err) => console.log(err))
}