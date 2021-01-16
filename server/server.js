import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'


dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align: center;">
            <h1 style="color: red;">${process.env.NODE_ENV}</h1>
            <div style="cursor: default; font-size: 2rem;">
                <div>░░░░░░░░░░░░░░░░░░░░░░░░░░█▄</div>
                <div>░▄▄▄▄▄▄░░░░░░░░░░░░░▄▄▄▄▄░░█▄</div>
                <div>░▀▀▀▀▀███▄░░░░░░░▄███▀▀▀▀░░░█▄</div>
                <div>░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█</div>
                <div>░▄▀▀▀▀▀▄░░░░░░░░░░▄▀▀▀▀▀▄░░░░█</div>
                <div>█▄████▄░▀▄░░░░░░▄█░▄████▄▀▄░░█▄</div>
                <div>████▀▀██░▀▄░░░░▄▀▄██▀█▄▄█░█▄░░█</div>
                <div>██▀██████░█░░░░█░████▀█▀██░█░░█</div>
                <div>████▀▄▀█▀░█░░░░█░█████▄██▀▄▀░░█</div>
                <div>███████▀░█░░░░░░█░█████▀░▄▀░░░█</div>
                <div>░▀▄▄▄▄▄▀▀░░░░░░░░▀▀▄▄▄▄▀▀░░░░░█</div>
                <div>░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█</div>
                <div>░░▓▓▓▓▓▓▓░░░░░░░░░░▓▓▓▓▓▓▓░░░░█</div>
                <div>░░░▓▓▓▓▓░░░░░░░░░░░░▓▓▓▓▓░░░░░█</div>
                <div>░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█</div>
                <div>░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█▀</div>
                <div>░░░░░░░░░▄▄███████▄▄░░░░░░░░░█</div>
                <div>░░░░░░░░█████████████░░░░░░░█▀</div>
                <div>░░░░░░░░░▀█████████▀░░░░░░░█▀</div>
                <div>░░░░░░░░░░░░░░░░░░░░░░░░░░█▀</div>
                <div>░░░░░░░░░░░░░░░░░░░░░░░░░█▀</div>
            </div>
        </div>
    `)
})


app.use('/api/products', productRoutes)

// middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `>>> Running in ${process.env.NODE_ENV} mode on: `
        + `http://localhost:${PORT}`.yellow.underline
    )
)
