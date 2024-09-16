import mongoose, { Mongoose } from "mongoose";

const mongoDB = "mongodb://localhost:27017/dbMongoose"

const main = async() => {
    try {
        await mongoose.connect(mongoDB)
        console.log("Conectado com sucesso")     
    } catch (error) {
        console.log("Erro ao conectar: ", error)
    }
}

main()

export default mongoose