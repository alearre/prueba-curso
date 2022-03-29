const express=require('express');
const app=express();

app.use(express.static(_dirname +'/public'));

app.get('/buenos', (req, res) =>{
    res.send('ruta Buenos Dias');
});

app.get('/hasta', (req, res) => {
    res.send('ruta Hasta luego');
});

app.post('/registro', (req, res)=> {
    res.send('recibiendo información de registro');
});
app.post('/login', (req, res)=> {
    res.send('ruta de login nueva');
});

app.listen(3000, ()=>{
    console.log('Example app listening on port 3000!');
});


