import React from "react"
import "./home.css"
import Me from "../../assets/hero.jpg"
import HeaderSocials from "./HeaderSocials.jsx"
import ScrollDown from "./ScrollDown.jsx"


const Home = () => {
    const startDate = new Date('Dec 27 2022');
    const current = new Date()
    const diff = new Date(current.getTime() - startDate.getTime())
    const data = `Software Developer <br> ${diff.getUTCFullYear() - 1970} year and ${diff.getMonth() + 5} months`
    return (<>
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Gun P</h1>
                <p className="home__name" dangerouslySetInnerHTML={{__html: data}}></p>
                
                <HeaderSocials/>
                <a href="https://drive.google.com/file/d/14HLtp6wOjw0N4uFVc3vsULh99R_thZXT/view?usp=sharing" className="btn" id="">Resume</a>
                <ScrollDown/>
            </div>
        </section>
    </>)
}

export default Home