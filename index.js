const express = require('express')
const app = express()
const port = parseInt(process.env.PORT) || 8080;

app.get('/', (req, res) => {
  const response = {};
  response.numerator = req.query.numerator;
  response.denominator = req.query.denominator;
  
  if ( !req.query.numerator || !req.query.denominator ) {
    // TODO: Comment out line 12 and uncomment line 13
    throw new Error('You must specify a valid numerator and denominator');
    // response.error = 'You must specify a valid numerator and denominator';
  } else {
    response.result = parseFloat(response.numerator,10)/parseFloat(response.denominator,10);
  }
  res.json(response);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})