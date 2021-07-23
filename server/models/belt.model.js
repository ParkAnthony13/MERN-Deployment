const mongoose = require("mongoose")

const BeltSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,"PET NAME REQUIRED"],
        minlength: [3, "NAME MUST BE AT LEAST 3 CHARACTERS"]
    },
    type: {
        type: String,
        required:[true,"PET TYPE REQUIRED"],
        minlength: [3, "TYPE MUST BE AT LEAST 3 CHARACTERS"]
    },
    description: {
        type: String,
        required:[true,"DESCRIPTION REQUIRED"],
        minlength: [3, "DESCRIPTION MUST BE AT LEAST 3 CHARACTERS"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number
    }
}, {timestamps : true})

const Belt = mongoose.model("BeltSchema", BeltSchema)
module.exports = Belt   // Belt name just make same as controller name Belt