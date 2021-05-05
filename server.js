require('dotenv').config()

const express = require('express')
const app = express()


app.use(require('morgan')('tiny'))
const routesReport = require('rowdy-logger').begin(app)

app.use(express.json())
app.use(require('cors')())


////////////////////////////////////////////

//add new code here!

////////////////////////////////////////////

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`backend server running on ${PORT}!`);
  routesReport.print()
})