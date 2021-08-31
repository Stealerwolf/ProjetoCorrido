const express = require('express');
const app = express();
var calcroute = require('./routes/usuarioroute');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.set("view engine","ejs");

app.use('/calculo', calcroute);

app.get("/", (req, res) => {
    res.send ("Calculadora no console")
});


app.listen('3000', function () {
    console.log("Server ligado!");
});