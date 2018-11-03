const cloudinary = require('cloudinary')

module.exports = function(app){
    app.post('/api/account/imageDelete',(req,res)=>{
        cloudinary.uploader.destroy(req.body.id)
        .then(
            respon=>res.send({ success : true,message:"pic deleted"})
        )
        .catch(
            console.err
        )
    });
}