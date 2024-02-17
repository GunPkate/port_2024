import React from "react"
import "./home.css"
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from "./HeaderSocials.jsx"
import ScrollDown from "./ScrollDown.jsx"


const Home = () => {
    return (<>
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="img__home" />
                <h1 className="home__name">Gun P</h1>
                <span className="home__education">Software Developer</span>
                
                <HeaderSocials/>
                <a href="#contact" className="btn" id="">Hire Me</a>
                <ScrollDown/>
            </div>
        </section>
    </>)
}

export default Home