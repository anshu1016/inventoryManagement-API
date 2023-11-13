const {Sales} = require('../models/sales.model.js');
const {Inventory} = require('../models/inventory.model.js');

const getAllSales = async () => {
  try {
    const sales = await Sales.find({}).populate('product');
    return sales;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addSalesData = async (salesData)=>{
  try {
    const newSale = new Sales(salesData);
    // const savedSale = await newSale.save();
    const populated= await newSale.populate('product')
    const savedSale = await populated.save()

    return savedSale
  } catch (error) {
    console.error(error)
    throw error
  }
}

const deleteSalesData = async (saleId)=>{
  try {
     await Sales.findByIdAndDelete(saleId);
    const updatedSales = await Sales.find({});
    return updatedSales
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = {
  getAllSales,
  deleteSalesData,
  addSalesData
}