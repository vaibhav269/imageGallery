var mongoose = require('mongoose');

var imageSchema = mongoose.Schema({  
  timestamp:{
    type:Date,
    default:Date.now()
  },
  bytes:Number,
  format : 'String',
  height : Number,
  public_id : 'String',
  resource_type : 'String',
  secure_url : 'String',
  signature : 'String',
  type : 'String',
  url : 'String',
  width : Number  
});

module.exports = mongoose.model('Image', imageSchema);