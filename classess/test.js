// const EventEmitter = require('events')

// const myEmitter = new EventEmitter()

// const newVar= function(){
//   console.log('doing well')
// }

// myEmitter.on('now things', newVar)

// myEmitter.emit('now things')

const fs = require('fs')

fs.readFile('file.json', (err, data) => {
  if(err){
    console.log(err)
    return
  }
  let file = JSON.parse(data)
  console.log(file)
})

// let newData = { 
//     name: 'Bayo',
//     age: 23, 
//     gender: 'Male',
// };
// let data = JSON.stringify(newData);
// fs.writeFile('file.json', data, (err) => {
//     if (err) throw err;
//     console.log('Data written to file')
// });