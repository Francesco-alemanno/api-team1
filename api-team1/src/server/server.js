import express, { json } from "express";
import cors from "cors";
import { getAll } from "../controllers/controllers.js";

const app = express();
const PORT = 5000;

// middleware
app.use(json());
app.use(cors());
// ----------
app.get('/animali', getAll)
// listener
app.listen(PORT, ()=>{
    console.log(`Server in ascolto su http://localhost:${PORT}`)
});
