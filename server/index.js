const express = require('express')
const moongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended: true})) //указываем, что express будет принимать  json формат
app.use('/api/auth', require('./routes/auth.route'))

async function start() {
  try {
    await moongoose.connect('mongodb+srv://NewAdmin:NewAdmin123@cluster0.idhsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()