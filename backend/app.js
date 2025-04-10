//imports
require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const cors = require('cors')

const cookieParser = require('cookie-parser')

const connectDB = require('./db/connect')


//routes
const routes = require('./routes/index')


//middlewares
const middlewares  = require('./middlewares/index')


//variables
const PORT = process.env.PORT || 5000


//middlewares

// Update CORS configuration with methods
app.use(cors({
  origin: ['http://localhost:3000', 'https://book-my-doc-alu5.vercel.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}))
app.use(express.json())
app.use(cookieParser())




//routes
app.use('/doctor', routes.doctor)
app.use('/patient', routes.patient)
app.use('/appointment', routes.appointment)
// app.use('/admin', routes.admin)

    //temp
app.get('/', (req,res)=>{

    res.send("<h1>Appointment-Scheduling-System</h1>")

})

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)





const start = async () => {

  try {

    await connectDB(process.env.MONGODB_URI);
    console.log('Connected to MongoDB successfully');
    
    app.listen(PORT, () => console.log(`Server is running at localhost:${PORT}`))

  } catch (error) {

    console.log(error)
  
  }
}
  
start()
