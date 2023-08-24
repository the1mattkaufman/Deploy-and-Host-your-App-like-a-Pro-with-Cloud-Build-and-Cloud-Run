const express = require('express')
const app = express()
const port = parseInt(process.env.PORT) || 8080;

app.get('/', (req, res) => {
  const response = {};
  response.numerator = parseFloat(req.query.numerator,10);
  response.denominator = parseFloat(req.query.denominator,10);
  response.result = response.numerator / response.denominator;

  if ( !req.query.numerator || !req.query.denominator ) {
    // TODO: Comment out line 12 and uncomment line 13
    throw new Error('Invalid numerator or denominator');
    // response.error = 'Invalid numerator or denominator';
  }
  res.json(response);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})