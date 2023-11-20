require('./db')
const cors = require('cors')
const express = require('express')
// const {corsOptions} = require('./middlewares/cors.middleware')
const {inventoryRouter}=require('./routers/inventory.routers.js')
const {salesRouter} = require('./routers/sales.routes.js')

const app = express()
app.use(express.json())
app.use(cors());
app.options('*', cors())
// app.use(cors(corsOptions));


app.use('/items', inventoryRouter)
app.use('/sales', salesRouter)
app.get('/',(req,res)=>{
  res.send('<h2>Inventory Management System</h2>')
})
app.listen(3000,()=>{
  console.log('server started')
})
