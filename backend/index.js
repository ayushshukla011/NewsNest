const express= require('express');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/newsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const app = express()
const port = 5000
app.use(express.json());

app.use('/auth',require('./routes/auth.js'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
