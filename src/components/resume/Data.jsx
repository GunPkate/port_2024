const Data = [
    {
        id: 1,
        category: "education",
        icon: "icon-graduation",
        title: "Entronica Outsource",
        tag: "Training",
        year: ["09/2022"],
        desc:"Fullstack Training Angular Bootstrap NodeJS Express Docker",
        img: ""
    },
    {
        id: 2,
        category: "education",
        icon: "icon-graduation",
        title: "Thai Nichi Institute",
        tag: "Information Technology",
        year: ["08/2020 - 04/2024"],
        desc:"Bachelor of Information Technology",
        img: "https://upload.wikimedia.org/wikipedia/th/7/79/Logo-tni.png"
    },
    {
        id: 3,
        category: "education",
        icon: "icon-graduation",
        title: "Thammasat",
        tag: "Accounting",
        year: ["06/2013 - 12/2018"],
        desc:"Bachelor of Accountancy",
        img: ""
    },
    {
        id: 4,
        category: "experience",
        icon: "icon-briefcase",
        title: "Advanced Info System",
        tag: "Software Developer",
        tech: ["Java", "Springboot","Angular"],
        year:"11/2022 - Present",
        desc:
        `<table width="100%">
            <tr> 
                <td width="20%"  rowspan="4">Assignment</td> <td> Project#1 Product Catalog (PO of AIS's products) </td>
            </tr>
            <tr>
                <td> Project#2 Sim Price Plan (ERP monitoring sim status) </td>
            </tr>
            <tr> 
                <td> (Sale Dept: AIS's products and promotion sim </td>
            </tr>
            <tr> 
                <td> internet roaming vertical apps) </td>
            </tr>
            <tr> 
                <td rowspan="3"> Backend </td> 
                <td> Implement Java Springboot ProsgresQL REST API </td>
            </tr>
            <tr> 
                <td> Implement ORM using JPA, Hibernate and ProsgresQL </td>
            </tr>
            <tr> 
                <td> Design sql script for report </td>
            </tr>
            <tr>
                <td rowspan = "2">Front End</td> <td> Get requirement and Develope Angular with bootstrap </td>
            </tr>
            <tr> 
                <td> ui and excel/word report according to business flow </td>
            </tr>
        </table>`,
        // img: `${exp1}`,
    },
    {
        id: 5,
        category: "experience",
        icon: "icon-briefcase",
        title: "Builk One",
        tag: "Software Developer",
        tech: ["C#", "Dot net MVC","Angular"],
        year: "02/2022 - 06/2022",
        desc:
        `<table width="100%">
            <tr>
                <td width="20%"  rowspan="2">Assignment</td>
                <td>  Develope ERP for construction companies and apply my accounting skill  </td>
            </tr>
            <tr>

                <td>  to implement new accounting module  </td>
            </tr>
            <tr>
                <td rowspan="2">Backend</td>
                <td>  Implement C# Javascript </td>
            </tr>
            <tr>
                <td>  Implement SQL server and Store Procedure for accounting document query API  </td>
            </tr>
            <tr>
                <td rowspan="2">Front End</td>
                <td>  Organize UX/UI with AngularJS  </td>
            </tr>
        </table>
        `,
        // img: `${exp2}`,
    },
    {
        id: 6,
        category: "experience",
        icon: "icon-briefcase",
        title: "KPMG",
        tag: "Audit Assistant",
        tech: [""],
        year: "01/2019 - 05/2020",
        desc:
        `<table width="100%">
            <tr><td rowspan="4" width="20%">Assignment</td> <td>  Performed audit procedure to test control efficiency. </td></tr>
            <tr><td>  Audited and evaluated AR of claim process. </td></tr>
            <tr><td>  Audited and evaluated cost of service of credit card. </td></tr>
            <tr><td>  Checked compliance of CAGR (Liquidity for investment portfolio). </td></tr>
        </table>`
    ,
        // img: `${exp3}`,
    },    
]

export default Data