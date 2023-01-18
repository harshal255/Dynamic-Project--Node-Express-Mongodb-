// console.log("Projects");
// console.log('2nd');

const express = require('express')
const app = express()
const hbs = require('hbs')
const mongoose = require('mongoose')
const Detail = require("./modals/Detail")
const Slider = require("./modals/Slider")
const Services = require("./modals/Services")

const Banner_1 = require('./modals/Banner_1')
const Banner_2 = require('./modals/Banner_2')
const About = require('./modals/About')
const Footer = require('./modals/Footer')

//for form submittion
const bodyParser = require('body-parser')



const routes = require('./routes/main');
app.use('/static', express.static("public")); //aceess public folder in browser
app.use(bodyParser.urlencoded({ //-->form handling
    extended: true
}))
//form handling end
app.use("", routes)



//template engine --> handlebars

app.set('view engine', 'hbs') // view engine ser as a handlebars
app.set("views", "views")// --> views directorys
hbs.registerPartials("views/partials") //--> Register partial

//db connections

mongoose.connect("mongodb://localhost/DynamicWebsite", () => {  //--> DynamicWebsite is a database name

    console.log("db connected");
    // Detail.create({
    //     brandName: "INFO Tech solution",
    //     brandIconUrl: "https://img.freepik.com/free-vector/vector-logo-illustration-mountain-gradient-colorful-style_361591-543.jpg?w=1060&t=st=1673895094~exp=1673895694~hmac=76a5d56ea0244754335e060029b970a52a0db5c13fa64d5f68eb01dce85bbcbd",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },

    //         {
    //             label: "Gallary",
    //             url: "/gallary"
    //         },
    //         {
    //             label: "About",
    //             url: "/about"
    //         },
    //         {
    //             label: "Contact",
    //             url: "/contact"
    //         },


    //     ]

    // })


    // Slider.create(
    //     [
    //         {
    //             title: 'Learn Java in very easy method',
    //             subTitle: 'Java is one of the most popular programming language.',
    //             imageUrl: "/static/images/1.jpg",
    //             class: "active"
    //         },
    //         {
    //             title: 'What is Next.js in React.js',
    //             subTitle: 'Next.js is a most famous web framwork of javascript programming',
    //             imageUrl: "/static/images/2.png",
    //             class:""
    //         },
    //         {
    //             title: 'What about node.js',
    //             subTitle: 'Node.js is runtime environment to execute javascript outside browser.',
    //             imageUrl: "/static/images/3.png",
    //             class:""
    //         }

    //     ]
    // )

    // Services.create(
    //     [
    //         {
    //             icon: "fa-brands fa-accusoft",
    //             title: "Provide Best Courses",
    //             desc: "We provide courses that helps our student in learning and in placement.",
    //             linkText: "https://harshalkahar.vercel.app/",
    //             link: "Check"
    //         },
    //         {
    //             icon: "fa-brands fa-accusoft",
    //             title: "Provide Best Courses",
    //             desc: "We provide courses that helps our student in learning and in placement.",
    //             linkText: "https://harshalkahar.vercel.app/",
    //             link: "Check"
    //         },
    //         {
    //             icon: "fa-brands fa-accusoft",
    //             title: "Provide Best Courses",
    //             desc: "We provide courses that helps our student in learning and in placement.",
    //             linkText: "https://harshalkahar.vercel.app/",
    //             link: "Check"
    //         },

    //     ]
    // )

    // Banner_1.create({
    //     title: "Missions",
    //     desc: "To associate students with industries.Make Students all rounder and industry material.Develop them strongly in terms of technical knowledge.",
    //     image: "https://img.freepik.com/free-vector/programmer-concept-idea-coding-testing-writing-program-using-internet-different-software-website-development-optimization-isolated-vector-illustration_613284-2833.jpg?w=826&t=st=1674036278~exp=1674036878~hmac=5b753986366c255251b4b62ba85cc2168bf482949d7ea76832c8ff35cf73fe21"
    // })

    // Banner_2.create({
    //     title: "Visions",
    //     desc: "Quality education at the most affordable rates.Opportunities in technical as well as non-technical fields. Mentoring the young generation.",
    //     image: "https://img.freepik.com/free-vector/back-end-development-concept-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-1064.jpg?w=900&t=st=1674036527~exp=1674037127~hmac=d7dcfedfb1d5b405910d23cabd16adf973004151ba8243481bc7e85110db3f5b"
    // })
    // About.create({
    //     title: "About This Side",
    //     desc: "we are providing mentoring, internships and Job opportunities to our students. We have a team of Trainees would work to flourish in their dream projects. We provide supports to Hackathons and start-ups."
    // })

    // Footer.create({
    //     desc: "Harshal Kahar"
    // })


    // --> once sucessfully create database in mongo-campus then you can comment Schmas,
    //no need to again call this function unless again create database

})


app.get("/", (req, res) => {
    res.send("Wow this is data from server")

})


app.listen(process.env.PORT | 80, () => {
    console.log("server Started");
})