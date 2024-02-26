import React from "react"
import "./service.css"
import image1 from "../../assets/service-1.svg"
import image2 from "../../assets/service-2.svg"
import image3 from "../../assets/service-3.svg"

const data = [
    {
        id: 1,
        image: image1,
        title: "Front End",
        description: 
            ` 
            <table>
                <tr> <td> <i class="fa fa-java" aria-hidden="true">        </td>   <td> &nbsp Angular V5 & V12 </td>   </tr> </i>    
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