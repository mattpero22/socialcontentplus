import { HashLink } from 'react-router-hash-link'

const Nav = () => {
    return <>
        <div id="nav">
            <div id="logo">
                <img id="navLogo" alt="Social Content +"src={`./img/logo1.jpg`}></img>
            </div>
            <ul id="navButtons">
                <li id="homeButton" className="navButton">
                    Home
                </li>
                <li id="aboutButton" className="navButton">
                    Contact
                </li>
                <li id="contactButton" className="navButton">
                    About
                </li>
            </ul>
        </div>
    </>
}

export default Nav
