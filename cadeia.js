import conn from "./conn.js"

const Schema = conn.Schema

const prisioneiroSchema = new Schema({
    nome: {
        type: Schema.Types.String,
        requirec: true
    }
})

const celaSchema = new Schema({
    altura: {
        type: Schema.Types.Number,
        required: true
    },
    comprimento: {
        type: Schema.Types.Number,
        required: true
    }, 
    largura: {
        type: Schema.Types.Number,
        required: true
    },
    prisioneiros: [prisioneiroSchema]
})

const cadeiaSchema = new Schema({
    postalCode: {
        type: Schema.Types.String,
        required: true
    },
    tipo: {
        type: Schema.Types.String,
        enum: ["Municipal", "Estadual", "Federal"],
        default: "Municipal"
    }, 
    celas: [celaSchema]
})

const Cadeia = conn.model("Cadeia", cadeiaSchema)

Cadeia.create({
    postalCode: "88833311",
    tipo: "Estadual",
    celas: [
        {
            altura: 2,
            largura: 5,
            comprimento: 5,
            prisioneiros: [
                {
                    nome: "João"
                },
                {
                    nome: "Maria"
                }
            ]
        }, 
        {
            altura: 2,
            largura: 5,
            comprimento: 5,
            prisioneiros: [
                {
                    nome: "Teste1"
                },
                {
                    nome: "Teste2"
                }
            ]
        }
    ]
})

export default Cadeia;
