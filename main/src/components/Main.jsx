// pages displayed in the main component
import About from "../pages/About"
import Contact from "../pages/Contact"
import Landing from "../pages/Landing"

const Main = (props) => {
    return <>
        <Landing></Landing>
        <About></About>
        <Contact></Contact>
    </>
}

export default Main
