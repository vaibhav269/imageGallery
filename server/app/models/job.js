var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
  userId:{
    type:String,
    default:''
  },
  job:{
    amount:String,
    heading:String,
    desc:String
  },
  isAnswered:{
    type:Boolean,
    default:false
  },
  timestamp:{
    type:Date,
    default:Date.now()
  },
  status:{
    type:String,
    default:'pending',    
  },
  category:{
    type:String
  }
});

module.exports = mongoose.model('Job', jobSchema);