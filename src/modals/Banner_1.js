const mongoose = require("mongoose")

const Banner_1 = mongoose.Schema({
    title: String,
    desc: String,
    image:String,

})

module.exports = mongoose.model("banner_1", Banner_1)