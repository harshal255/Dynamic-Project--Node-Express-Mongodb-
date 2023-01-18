const mongoose = require("mongoose")

const Footer = mongoose.Schema({

    desc: String,

})

module.exports = mongoose.model("footer", Footer)