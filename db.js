const {connect}= require('mongoose');
const mongoURI = process.env.MONGODB;

const connectDB=async()=>{
  try{
    await connect(mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    console.log("connected to MongoDB")
  }catch(error){
    console.error(error)
  }
}
connectDB()