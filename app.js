import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import courseRoutes from './routes/courseRoutes.js'

const app = express()
const port = 5000

dotenv.config()
connectDB()

app.use(cors({ origin: 'https://easytech-fe.vercel.app', credentials: true }))

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRoutes)
app.use('/api/courses', courseRoutes)

app.listen(port, (req, res) => {
	console.log(`Server running at port ${port}`)
})
