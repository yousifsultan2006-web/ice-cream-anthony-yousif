// import the express module
import express from 'express';

// create an instance of express 
const app = express();

// define port
const PORT = 8000;
<<<<<<< HEAD
=======

app.use(express.static('public'));
>>>>>>> 777edee1f0c6623618b8089de0a343882ede54b2

// define default route

app.get('/', (req,res)=> {
<<<<<<< HEAD
    res.sendFile(`${import.meta.dirname}/views/home.html`);
    
=======
     res.sendFile(`${import.meta.dirname}/views/home.html`);
   // res.send('welcom to our ice cream shop')
>>>>>>> 777edee1f0c6623618b8089de0a343882ede54b2
});

app.listen(PORT,()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
});