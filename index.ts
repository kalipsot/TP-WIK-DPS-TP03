const express = require('express')
const os = require("os")
const app = express()
const port = 8080; 
app.use(express.json())


app.get('/ping', (req, res) => {
  try{
    console.log(os.hostname())
    res.json(req.headers)}
    catch(e){
      console.log(e)
      res.status(500).send()
    }
  });

app.get("*",(req, res) => {
  try{
  res.status(404).send()}
  catch(e){
    console.log(e)
    res.status(500).send()
  }
})
  
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});

