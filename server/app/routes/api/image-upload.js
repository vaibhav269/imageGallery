const formData = require('express-form-data')
const cloudinary = require('cloudinary')

module.exports = function(app){
    app.use(formData.parse())
    app.post('/api/account/imageUpload', (req,res) => {                
        const values = Object.values(req.files);
        const promises = values.map(image => cloudinary.uploader.upload(image.path))
        Promise
        .all(promises)
        .then(results => res.json(results))
        .catch(console.err)
    })
}