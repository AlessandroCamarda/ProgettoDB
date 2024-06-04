/*const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
app.use(cors());


mongoose.connect('mongodb+srv://alessandrocamarda24:Carpentieri@backenddb.8glminh.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
   .then(() => console.log('Connected!'));


app.listen(3000, () => {
    console.log("Listening");
});*/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userController = require('./Login/userController');
const { MongoClient } = require('mongodb');
const mongoClient = new MongoClient('mongodb+srv://peppecimanchi:StefanoBrunetti@progetto.rj7mepj.mongodb.net/?retryWrites=true&w=majority&appName=Progetto');
const app = express();

mongoose.connect('mongodb+srv://peppecimanchi:StefanoBrunetti@progetto.rj7mepj.mongodb.net/?retryWrites=true&w=majority&appName=Progetto');
const db = mongoose.connection

app.use(cors());
app.use(cookieParser());
app.use(express.static("static"))
app.use(express.json());
let tennisDB, articoliCollection;
let clusterPersone, personeCollection;
const EmployeeModel = require('./models/Employee')

db.once("open", () => {
  console.log("db connesso")
  app.listen(3001, () => {
    console.log('server started')});

    tennisDB = mongoClient.db('tennis');
    articoliCollection = tennisDB.collection('articoli');

    PersoneDB = mongoClient.db('persone');
    personeCollection = PersoneDB.collection('registrazione');
    
    

})

app.post('/register', async (req,res)=>{ 
  try{
    const utente = await EmployeeModel.create(req.body);
    await utente.save();
    await personeCollection.insertOne(req.body);
    res.status(200).send({ message: 'Articolo aggiunto con successo' });
  } catch (error) {
  console.error(error);
    res.status(500).send({ message: 'Errore durante l\'aggiunta dell\'articolo' })
}
});

app.get('/',(req, res) =>{
    res.send("Homepage");
} )

app.post('/aggiungi-articolo', async (req,res)=>{ //prova che permette di aggiungere un elemento articolo nel database con postman
    try{
    console.log(req.body);
    const nuovoArticolo = {
        titolo: req.body.titolo,
        testo: req.body.testo,
        prezzo: req.body.prezzo
    };
    await articoliCollection.insertOne(nuovoArticolo);
    res.status(200).send({ message: 'Articolo aggiunto con successo' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Errore durante l\'aggiunta dell\'articolo' })
  }
});

