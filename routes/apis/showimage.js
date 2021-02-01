const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const fs = require('fs');


router.get('/:imagename', (req,res) => {

    const contents = fs.readFileSync(`public/${req.params.imagename}`);
    res.contentType('image/png')
    res.set("Content-Disposition", "inline");
    return res.send(contents)

})

module.exports = router;