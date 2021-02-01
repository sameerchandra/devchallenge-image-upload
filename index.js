const express = require('express')
const path = require('path');
const app = express()


var port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/upload', require('./routes/apis/upload'));
app.use('/api/image', require('./routes/apis/showimage'));


app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
   
  app.listen(port, () =>{
      console.log('listening on ' + port)
  })
