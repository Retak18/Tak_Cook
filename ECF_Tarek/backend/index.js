const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const app = express();

//-----------dossier pour les images

app.use('/public', express.static(path.join(__dirname, '../public/image')));
app.use('/image', express.static(path.join(__dirname, 'public', 'image')));

const recipeRoutes = require('./routes/recipe')


mongoose.connect("mongodb+srv://lamartitarek:GyPdhKZHehDHrgvk@cluster0.pjurict.mongodb.net/ECF_1")
    .then(()=> {
        console.log('Tak Mongo is connected');
    }) .catch((error) =>{
        console.log(error)
    });

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/recipes', recipeRoutes);


app.listen(3003, () => {
    console.log('Server started on http://localhost:3003');
});