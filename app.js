// import the express module
import express from 'express';

// create an instance of express 
const app = express();

// define port
const PORT = 8000;

// define default route

app.get('/', (req,res)=> {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
    
});

app.listen(PORT,()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
});