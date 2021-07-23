const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require("./config/mongoose.config")

const beltRoutes = require('./routes/belt.routes') // name isn't used anywhere else
beltRoutes(app)

app.listen(port, () => console.log(`EXPRESS LISTENING ON ${port}`))