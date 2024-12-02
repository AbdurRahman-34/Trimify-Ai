import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'


// App Config Setup ::
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Intialize Middleware ::
app.use(express.json())
app.use(cors())


// Api Routes ::
app.get('/', (req, res) => res.send("Api Working..."))
app.listen(PORT, () => console.log("Sever Running on Port" + PORT))