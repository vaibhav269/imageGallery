const cloudinary = require('cloudinary')
const Image = require('../../models/image');

module.exports = function(app){
    app.post('/api/account/imageDelete',(req,res)=>{
        const id = req.body.id;
        cloudinary.uploader.destroy(id)
        .then(
            respon =>{
                Image.deleteOne({public_id : id},function(err){
                    if(!err){
                        res.send({
                            success : true,
                            message: 'pic deleted'
                        })
                    }else{
                        res.send({
                            success : false,
                            message: 'Some error while deleting'
                        })
                    }
                })                
            }            
        )
        .catch(
            (err)=>{
                res.send({
                    success : false,
                    message: 'Some error while deleting'
                })
            }
        )
    });
}