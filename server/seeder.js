import mongoose from 'mongoose'
import dovenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'


dovenv.config()
connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        const createdUsers = await User.insertMany(users)
        const admin = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user: admin }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported Successfully'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        console.log('Data Destroyed Successfully'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}


process.argv[2] === '-d' ? destroyData() : importData()