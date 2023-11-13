const {Schema , model} = require('mongoose');

const salesSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'inventoryItem',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type:Number,
    required:true
  }
})
const Sales = model('sales', salesSchema);
module.exports ={Sales}