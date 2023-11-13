
const { Schema, Type, model } = require('mongoose');

const inventoryItemSchema = new Schema({
  name: {
    type: String,
    reuired: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    reuired: true
  }
})

const Item = model('inventoryItem', inventoryItemSchema);

module.exports = { Item }