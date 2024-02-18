import React from "react"
import "./service.css"
import image1 from "../../assets/service-1.svg"
import image2 from "../../assets/service-2.svg"
import image3 from "../../assets/service-3.svg"

const data = [
    {
        id: 1,
        image: image1,
        title: "Fronte End",
        description: "Angular V5 & V12"
    },
    {
        id: 2,
        image: image2,
        title: "Fronte End",
        description: "Angular V5 & V12"
    },
    {
        id: 3,
        image: image3,
        title: "Fronte End",
        description: "Angular V5 & V12"
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
                        <div className="services__title">{title}</div>
                        <div className="services__description">{description}</div>
                    </div>
                </>
                ) )  }
            </div>
        </section>    
    )
}

export default Service