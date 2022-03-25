const express=require('express');
const app=express();

app.use(express.static(_dirname +'/public'));


app.listen(3000, ()=>{
    console.log('Example app listening on port 3000!');
})


