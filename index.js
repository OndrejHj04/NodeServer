const express = require('express')
const app = express()

app.get('/data', (req, res) => {
  res.json({data: "success"})
})

app.listen(3000, ()=>console.log("running"))