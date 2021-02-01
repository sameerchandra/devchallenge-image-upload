const express = require('express')
const path = require('path');
const app = express()

var port = 5000

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});


app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
   
  app.listen(port, () =>{
      console.log('listening on ' + port)
  })
