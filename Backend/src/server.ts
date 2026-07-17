import express from 'express';
import cors from 'cors'
import postSementicSearchRouter from './routers/sementic.router';
const app = express();

app.use(cors({
  origin :["http://localhost:5173"]
}))
app.use(express.json());

//our rest api's

app.use('/api/sementic_search', postSementicSearchRouter);
const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`http://localhost:3000`)
})