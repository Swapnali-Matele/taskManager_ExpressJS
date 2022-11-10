const connectDB = require('./db/connect')
const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks')
require('dotenv').config()
const notFound = require('./middlewear/notFound')
const errorHandlerMidleware = require('./middlewear/error-handling')


 
//routes

app.use(express.json());

app.get('/hello', (req, res) =>{
    res.send('Task manager App')
})

app.use('/api/v1/tasks',tasks)
app.use(notFound);
app.use(errorHandlerMidleware);

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('server listening on port ' + port));
    }catch(err){
        console.log(err)

    }

}

start()