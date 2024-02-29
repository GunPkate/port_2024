import React from "react"

const HeaderSocials = () => {
    return (
        <>
            <div className="home__socials">
                <a href="https://github.com/GunPkate" className="home__social-link" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/gun-puengkatesoontorn-b5b828153/" className="home__social-link" target="_blank">
                    <i class="fa fa-linkedin-square" ></i>
                </a>
                <a href="https://www.youtube.com/watch?v=NWqgpc-uVTY" className="home__social-link" target="_blank">
                    <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://gundash1.medium.com/" className="home__social-link" target="_blank">
                <i class="fa fa-medium-square" aria-hidden="true"></i>
                </a>
            </div>
        </>
    )
}

export default HeaderSocials