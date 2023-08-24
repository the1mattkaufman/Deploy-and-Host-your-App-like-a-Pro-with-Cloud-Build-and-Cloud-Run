const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const response = {};
  response.numerator = req.query.numerator;
  response.denominator = req.query.denominator;
  
  // TODO: Delete the next line
  response.result = parseFloat(response.numerator,10)/parseFloat(response.denominator,10);
  try {
    // TODO: Uncomment the next line
    // response.result = parseFloat(numerator,10)/parseFloat(denominator,10);
  } catch ( e ){
    response.error = e;
  }
  res.json(response);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})