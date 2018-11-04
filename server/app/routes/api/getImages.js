const cloudinary = require('cloudinary')
const Image = require('../../models/image');

module.exports = function(app){
    app.get('/api/account/getImages',function(req,res){
        Image.find({},function(err,data){
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