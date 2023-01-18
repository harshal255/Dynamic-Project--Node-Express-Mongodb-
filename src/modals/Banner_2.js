const mongoose = require("mongoose")

const Banner_2 = mongoose.Schema({
    title: String,
    desc: String,
    image: String

})

module.exports = mongoose.model("banner_2", Banner_2)