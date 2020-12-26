import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(
            process.env.MONGODB_URI,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
            }
        )
        const host = connect.connection.host
        console.log(`>>> MongoDB connected to: ${host.cyan.underline}`)
    } catch(error) {
        console.error(`>>> Error: ${error.message.red.bold}`)
        process.exit(1)
    }
}

export default connectDB