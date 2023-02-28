import emailjs from 'emailjs-com'


const Contact = () => {
    
    const sendEmail = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return <>
    <div id="contact" className="page">
        Contact Page
        <form id="contactForm" onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" />
            <input type="submit" value="Send" />
        </form>
    </div>
    </>
}

export default Contact
