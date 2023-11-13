const {Item} = require('../models/inventory.model');


const addInventoryData = async(item)=>{
  try{
    const newItem = new Item(item)
    const saved = await newItem.save();
    console.log("saved Data", saved)
    return saved
  }catch(error){
    throw error
  }
}

const updateInventoryData=async(itemId, itemData)=>{
  try{
    const updatedData = await Item.findByIdAndUpdate(itemId, itemData, {new:true});
    console.log("Update successfull")
    return updatedData;
    
  }catch(error){
    console.error(error)
  }
}

const getAllInventoryItems= async()=>{
  try{
    const inventoryItems = await Item.find({});
  return inventoryItems
  }catch(error){
    console.error(error)
    throw error
  }
}
const deleteInventoryItem = async(id)=>{
  try{
    await Item.findByIdAndDelete(id);
    const newDataArray = await Item.find({});
    return newDataArray
  }catch(error){
    console.error(error)
  }
}

module.exports= {addInventoryData,
                 updateInventoryData,
                getAllInventoryItems,
                 deleteInventoryItem
                }