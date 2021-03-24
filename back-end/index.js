const express = require('express');
const app = express();
const server = require('http').createServer(app);
 
app.get('/hi', (req, res) => {
  res.send('Hello World')
})
 
server.listen(process.env.PORT || 3000, () => {
  console.log('Server is up!');
});