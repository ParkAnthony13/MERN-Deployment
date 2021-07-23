const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/belt", { // DB name is authors here
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONNECTED TO BELT DB"))
    .catch(err => console.log("Error: ", err))