const express = require('express')
const { route } = require('express/lib/application')
const Detail = require("../modals/Detail")
const Slider = require('../modals/Slider')
const Services = require('../modals/Services')
const Contact = require('../modals/Contact')
const Banner_1 = require('../modals/Banner_1')
const Banner_2 = require('../modals/Banner_2')
const About = require('../modals/About')
const Footer = require('../modals/Footer')


const routes = express.Router()


routes.get("", async (req, res) => {
    // res.send("this is message from routes")
    const details = await Detail.findOne({ "_id": "63c65a1191647587ffc7d75a" })

    const sliders = await Slider.find()
    const services = await Services.find()
    const banners_1 = await Banner_1.findOne({ "_id": "63c7c570d019bb7b021f50ce" })
    const banners_2 = await Banner_2.findOne({ "_id": "63c7c570d019bb7b021f50cf" })
    const abouts = await About.findOne({ "_id": "63c7b3a774a11ffeba8bb11e" })
    const footers = await Footer.findOne({ "_id": "63c7b41028fc6e5a3b0cfde2" })
    // console.log(details);
    // console.log(sliders);
    // console.log(services);
    res.render("index", {
        details: details,
        sliders: sliders,
        services: services,
        banners_1: banners_1,
        banners_2: banners_2,
        abouts: abouts,
        footers: footers

    })
})
routes.get("/gallary", async (req, res) => {
    const details = await Detail.findOne({ "_id": "63c65a1191647587ffc7d75a" })


    res.render("gallary", {
        details: details
    })
})

//for form handling

routes.post("/process-contact-form", async (req, res) => {
    // console.log("Form is Submitted");
    // console.log(req.body);
    //save the data to database

    try {
        const data = await Contact.create(req.body)
        // console.log(data);
        res.redirect("/");

    } catch (e) {
        // console.log(e);
        res.redirect("/");

    }
})
module.exports = routes