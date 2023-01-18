const mongoose = require("mongoose")

const Services = mongoose.Schema({

    icon: String,
    title: String,
    desc: String,
    linkText: String,
    link: String,
})

module.exports = mongoose.model("services", Services)