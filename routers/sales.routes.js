const {Router} = require('express');
const salesRouter = Router();
const {  getAllSales,
       deleteSalesData,
       addSalesData
} = require('../queries/sales.queries')

salesRouter.get('/', async (req, res) => {
  try {
    const data = await getAllSales();
    res.json({ message: "Found sales data", data })
  } catch (error) {
    console.error(error)
    res.status(404).json({ message: "No sales data found" })
  }
})
salesRouter.post('/', async (req, res) => {
  try {
    const data = await addSalesData(req.body);
    if (Object.keys(data).length > 0) {
      res.status(201).json({ message: "Data added to sales successfully", data })
    }
    else res.status(500).json({ message: "Check request body and try again", data })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "Check request body and try again", error })
  }})

salesRouter.delete('/:id', async (req, res) => {
  try {
    const response = await deleteSalesData(req.params.id)
    if (response) {
      res.status(200).json({ message: "Data deleted successfully", data: response })
    }else{
      res.status(400).json({message:"Check request params id and try again", data: response})
    }
  } catch (error) {
        console.error(error);
    res.status(400).json({ message: "Check request params id and try again", error })
  }
})


module.exports= {salesRouter}