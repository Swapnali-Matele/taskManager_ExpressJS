const mongoose = require('mongoose');   



const connectDB =(url)=>{
    return mongoose.connect(url);
}
 module.exports = connectDB;


// .then(()=>{console.log('connect tothe DB')})
// .catch((err)=>{console.log(err)});