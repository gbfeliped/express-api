import express from 'express';


const port = 25554;
const app = express();

app.get('/', (req, res) => {
  res.json("Hello World!");
})


app.listen(port);