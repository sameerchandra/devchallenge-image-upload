const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var multer = require('multer')

var fs = require('fs');
var dir = 'public';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')





router.post('/', (req,res) => {

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   return res.status(200).send(req.file)

 })

})

module.exports = router;