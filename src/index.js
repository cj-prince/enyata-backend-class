const express = require('express')
const dotenv =  require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
const port = process.env.PORT
const company = require('./db/data.json')
const router = require('./routes/companyRoutes')


const app = express()

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json())

app.use(router)


// basic pagination
// app.get('/', (req,res)=> {
//   const page = req.query.page
//   const limit = req.query.limit

//   const startIndex = (page -1)*limit
//   const stopIndex = page*limit
//   const pageNo = companies.slice(startIndex, stopIndex)
//   res.json(pageNo)
// })



app.listen(port, () => console.log(`server started on port ${port}`))