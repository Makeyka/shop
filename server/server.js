import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'


dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send(`
        <h1 style="color:red;">
            ${process.env.NODE_ENV}
        </h1>
    `)
})


app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `>>> Running in ${process.env.NODE_ENV} mode on: `
        + `http://localhost:${PORT}`.yellow.underline
    )
)
