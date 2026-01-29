// import the express module
import express from 'express';

// create an instance of express 
const app = express();

// define port
const PORT = 8000;

app.use(express.static('public'));

// define default route

app.get('/', (req,res)=> {
     res.sendFile(`${import.meta.dirname}/views/home.html`);
   // res.send('welcom to our ice cream shop')
});

app.listen(PORT,()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
});