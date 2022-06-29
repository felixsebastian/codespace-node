const express = require('express')
const app = express()
const port = 3000

app.get('/', (_, res) => {
  let x = 3
  console.log(x);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
