const { Router } = require('express')

const inventoryRouter = Router();
const { addInventoryData,
  updateInventoryData,
  getAllInventoryItems,
  deleteInventoryItem
} = require('../queries/inventory.queries')

inventoryRouter.get('/', async (req, res) => {
  try {
    const data = await getAllInventoryItems();
    res.json({ message: "Found inventory data", data })
  } catch (error) {
    console.error(error)
    res.status(404).json({ message: "No inventory data found" })
  }
})

inventoryRouter.post('/', async (req, res) => {
  try {
    console.log("request body", req.body)
    const data = await addInventoryData(req.body);

    if (Object.keys(data).length > 0) {
      res.status(201).json({ message: "Data added to inventory successfully", data })
    }
    else res.status(500).json({ message: "Check request body and try again", data })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "Check request body and try again", error })
  }
})

inventoryRouter.delete('/:id', async (req, res) => {
  try {
    const data = await deleteInventoryItem(req.params.id);
    if (data) {
      res.status(200).json({ message: "Data deleted successfully", data })
    }
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "Check request body and try again", error })
  }
})
inventoryRouter.post('/:id', async (req, res) => {
  try {
    const response = await updateInventoryData(req.params.id, req.body);
    if (response) {
      res.status(202).json({ message: "Data updated successfully", data: response })
    } else res.json()
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "Check request body and try again", error })
  }
})

module.exports = { inventoryRouter }