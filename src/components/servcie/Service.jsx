import React from "react"
import "./service.css"
import image1 from "../../assets/service-1.svg"
import image2 from "../../assets/service-2.svg"
import image3 from "../../assets/service-3.svg"
const  ngfa = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"/></svg>` 
const bootstrap = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4 238.2 333.5 225 333.5 201.4zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1 0-55.8 28.1-54.7 58.5c1 29.3-.3 67.2-9.8 98.1c-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1c9.5 30.9 10.9 68.8 9.8 98.1c-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5c-1-29.3 .3-67.2 9.8-98.1c9.6-31 25.7-50.6 52.1-53.1v-28.5C542.7 239.2 526.5 219.6 517 188.6zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4c0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3C383.4 349.7 352.1 375.1 300.2 375.1zM290.2 266.4h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5C344.7 279.6 326.1 266.4 290.2 266.4z"/></svg> `

const data = [
    {
        id: 1,
        image: image1,
        title: "Front End",
        description: 
            ` 
            <table>
                <tr> <td style="align-self: center"> ${ngfa} </td>   <td> &nbsp Angular V5 & V12 </td>   </tr> </i>    
                <tr> <td> ${bootstrap}</td>   <td> &nbsp Bootstrap </td> </tr> </i>   
                <tr> <td> <i class="fa fa-react" aria-hidden="true">       </td>   <td> &nbsp React </td> </tr> </i>   
                <tr> <td> <i class="fa fa-nodejs" aria-hidden="true">       </td>   <td> &nbsp NodeJS 6.9 | 12.16 | 20.9</td> </tr> </i>       
            </table>
            `
    },
    {
        id: 2,
        image: image2,
        title: "Back End",
        description: 
            ` 
            <table>
                <tr> <td> <i class="fa fa-java" aria-hidden="true">         </td>   <td> &nbsp Java Springboot</td>   </tr> </i>    
                <tr> <td> <i class="fa fa-nodejs" aria-hidden="true">       </td>   <td> &nbsp JS Express | Hapi</td> </tr> </i>   
                <tr> <td> <i class="fa fa-csharp" aria-hidden="true">       </td>   <td> &nbsp C# WPF | Web API</td> </tr> </i>  
                <tr> <td> <i class="fa fa-postgresql" aria-hidden="true">   </td>   <td> &nbsp Postgres | DBeaver</td>   </tr> </i>  
                <tr> <td> <i class="fa fa-mysql" aria-hidden="true">        </td>   <td> &nbsp MySQL </td>   </tr> </i> 
            </table>
            `
        
    },
    {
        id: 3,
        image: image3,
        title: "Business Skill",
        description: 
            ` 
            <table>
                <tr> <td> <i class="fa fa-money" aria-hidden="true">        </td>   <td> &nbsp Accounting </td>   </tr> </i>    
                <tr> <td> <i class="fa fa-suitcase" aria-hidden="true">       </td>   <td> &nbsp ERP </td> </tr> </i>   
    
            </table>
            `
    }
]

const Service = () => {
    return (
        <section className="service container section" id="service">
            <h2 className="section__title"> Services </h2>
            <div className="services__container grid">
                {data.map(({id,image,title,description}) => (
                <>
                    <div className="services__card" key={id}>
                        <img src={image} className="services__img" alt="" />
                        <h1 style={{color: "white"}}>{title}</h1>
                        <div className = "service__block">
                            <div className="services__description" dangerouslySetInnerHTML={{__html: description}}>{}</div>
                        </div>
                    </div>
                </>
                ) )  }
            </div>
        </section>    
    )
}

export default Service