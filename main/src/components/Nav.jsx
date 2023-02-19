import { HashLink } from 'react-router-hash-link'

const Nav = () => {
    return <>
        <div id="nav">
            <div id="logo">
                <img id="navLogo" alt="Social Content +"src={`./img/logo_light.png`}></img>
            </div>
            <ul id="navButtons">
                <HashLink className='navButton' smooth to={'/#'}>
                    <p>Home</p>
                </HashLink>
                <HashLink className='navButton' smooth to={'/#about'}>
                    <p>About</p>
                </HashLink>
                <HashLink className='navButton' smooth to={'/#calendar'}>
                    <p>Contact</p>
                </HashLink>
            </ul>
        </div>
    </>
}

export default Nav
