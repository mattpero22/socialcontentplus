// pages displayed in the main component
import About from "../pages/About"
import Contact from "../pages/Contact"
import Landing from "../pages/Landing"

const Main = (props) => {
    const currentPage = props.page
    let pageEle = <></>

    // check the page using props
    currentPage === "landing" ? pageEle = <Landing></Landing> : <></>
    currentPage === "about" ? pageEle = <About></About> : <></>
    currentPage === "contact" ? pageEle = <Contact></Contact> : <></>

    return pageEle
}

export default Main
