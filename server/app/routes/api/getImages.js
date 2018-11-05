const cloudinary = require('cloudinary')
const Image = require('../../models/image');

module.exports = function(app){
    app.post('/api/account/getImages',function(req,res){
        let start = req.body.start;
        Image.find({},null,{sort: {timestamp: -1},skip:start,limit:10},function(err,data){
            if(!err){
                res.send({
                    success:true,
                    message:'images fetched',
                    images:data
                })
            }
            else{
                res.send({
                    success:false,
                    message:"couldn't get the images"
                })
            }            
        });
    });
}