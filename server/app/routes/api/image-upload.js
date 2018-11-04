const formData = require('express-form-data')
const cloudinary = require('cloudinary')
const Image = require('../../models/image');

module.exports = function(app){
    app.use(formData.parse())
    app.post('/api/account/imageUpload', (req,res) => {
        const values = Object.values(req.files);
        const promises = values.map(image => cloudinary.uploader.upload(image.path))
        Promise
        .all(promises)
        .then(results => {
            Image.insertMany(results, function(error, docs) {
                if(error){
                    console.log(error);
                    res.json({
                        success: false,
                        message: 'Error Occured' 
                    });
                }else{
                    console.log('success');
                    res.json({
                        success: true,
                        message: 'Successfully stored',
                        images:docs
                    });                    
                }
            });
        })
        .catch((err)=>res.send({
            success:false,
            message:'Not uploaded'
        }))
    })
}