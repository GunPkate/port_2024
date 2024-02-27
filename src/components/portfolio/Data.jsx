import image1_1 from "../../assets/projects/pro1/project1.jpg"
import image1_2 from "../../assets/projects/pro1/project2.jpg"
import image2_1 from "../../assets/projects/pro2/project1.jpg"
import image2_2 from "../../assets/projects/pro2/project2.jpg"
import image2_3 from "../../assets/projects/pro2/project3.jpg"
import image2_4 from "../../assets/projects/pro2/project4.jpg"
import image2_5 from "../../assets/projects/pro2/project5.jpg"
import image2_6 from "../../assets/projects/pro2/project6.jpg"

import image3 from "../../assets/work-3.svg"
import image4_1 from "../../assets/projects/pro4/project1.jpg"
import image4_2 from "../../assets/projects/pro4/project2.jpg"
import image4_3 from "../../assets/projects/pro4/project3.jpg"
import image5 from "../../assets/work-5.svg"
import image6 from "../../assets/work-6.svg"


const Data = [
    {
        id: 1,
        image: [image1_1,image1_2],
        title: "C# Accounting",
        category: "Backend",
        subgroup: ["C#","WPF","Dot net"],
        desc: "Apply C# WPF to make accounting system connecting to MS sql as Database"
    },
    {
        id: 2,
        image: [image2_1,image2_2,image2_3,image2_4,image2_5,image2_6],
        title: "Angular Clinic POS",
        category: "Fullstack",
        subgroup: ["Angular","Express","Javascript"],
        desc: "Angular 14 use routing to navigate to form pages and report pages and get data by HTTP client module and js Express connect to NoSQL MongoDB and apply Schema to Front End Interface"
    },
    {
        id: 3,
        image: [image3],
        title: "Ecommerce Next MongoDB",
        category: "Fullstack",
        subgroup: ["Next","React","Dot net","Web api"]
    },
    {
        id: 4,
        image: [image4_1,image4_2,image4_3],
        title: "Email Debt Noti",
        category: "Backend",
        subgroup: ["Hapi","Postgres"],
        desc: "Use javascript and MySql as Backend. This require nodejs to apply Hapi and nodemailer to generate email"
    },
    {
        id: 5,
        image: [image5],
        title: "C# React POS",
        category: "Fullstack",
        subgroup: ["C#","React","Dot net","Web api","Postgres"],
        desc: "Use React and chart js . C# .net7 web api"
    },
    {
        id: 6,
        image: [image6],
        title: "Game Store",
        category: "Art"
    },


]

export default Data