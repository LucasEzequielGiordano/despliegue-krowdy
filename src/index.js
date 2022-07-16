import express from 'express'
import mongoose from 'mongoose'

const PORT = 8080
const HOST = '0.0.0.0'
const app = express()
mongoose.connect('mongodb://localhost:27017')

const Persona = mongoose.model('Persona', new mongoose.Schema({
    nombre: String
}));

app.get('/', (_req, res) => {
    res.send('hola, escriba en los parametros su nombre')
    let persona = Persona.find()
    return res.send(persona)
})

app.get('/registrar', (req, res) => {
    let nombre = req.query.nombre
    console.log('se está creando')
        Persona.create({ nombre: nombre })    
        console.log('se creó')
    res.send('registrado ' + nombre)
})

app.listen(PORT, HOST)
console.log(`running on http://${HOST}:${PORT}`)