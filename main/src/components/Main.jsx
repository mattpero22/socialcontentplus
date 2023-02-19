// pages displayed in the main component
import About from "../pages/About"
import Calendar from "../pages/Calendar"
import Contact from "../pages/Contact"
import Landing from "../pages/Landing"

const Main = (props) => {
    return <>
        <Landing></Landing>
        <About></About>
        <Calendar></Calendar>
        <Contact></Contact>
    </>
}

export default Main
