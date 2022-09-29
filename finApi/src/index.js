const express = require('express')
const dotenv =  require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const port = process.env.PORT
const company = require('./db/data.json')

const app = express()

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json())

let companies = [...company]

// get
app.get('/', (req, res) => {
  res.status(200).send(companies)
  
})

//post
app.post('/', (req, res)=>{
  const company = req.body
  const newCompany = {...company, id: uuidv4()}
  companies.push(newCompany)
  res.send({message:`Company Post Made`})
  res.end()
})

// get single user
app.get('/:id', (req, res) =>{
    const {id} = req.params.id

    const getCountry = companies.find((country)=> country.id === id)
    res.send(getCountry)
})


//update
app.patch('/:id', (req, res) => {
  const company = companies.find((company) => company.id === req.params.id);
    
    company.name = req.body.name;
    company.area = req.body.area;
    res.status(200).send({message:`Update company`})
})

//delete
app.delete('/:id', (req, res) => {
    const id = req.params.id
    companies = companies.filter((company) => company.id != id )
    res.status(200).send("DELETE Request Called")
})

app.listen(port, () => console.log(`server started on port ${port}`))