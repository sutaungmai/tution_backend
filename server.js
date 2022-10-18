require('dotenv/config')

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const studentRouter = require('./routes/student')

//middleware
app.use(express.json())

app.use((req,res, next) => {
    console.log(req.path, req.method);
    next()
})


// router
app.use('/student',studentRouter)

// database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`server is listening on PORT ${process.env.PORT}`)
        })
    })
    .catch(error => {
        console.log(error)
    })

