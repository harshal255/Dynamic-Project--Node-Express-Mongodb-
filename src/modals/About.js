const mongoose = require("mongoose")

const About = mongoose.Schema({
    title: String,
    desc: String,

})

module.exports = mongoose.model("about", About)