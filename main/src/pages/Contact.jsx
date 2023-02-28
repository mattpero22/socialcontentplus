import emailjs from 'emailjs-com'


const Contact = () => {
    
    const sendEmail = (e) => {
        e.preventDefault()
        alert("your email was sent")
        console.log("your")
    }

    return <>
    <div id="contact" className="page">
        <form id="contactForm" onSubmit={sendEmail}>
            <p>CONTACT PAGE</p>
            <div>            
                <label for="from_name">Name</label>
                <input className="contactFormField" type="text" id="from_name" name="from_name" />
            </div>
            <div>            
                <label for="from_email">Email</label>
                <input className="contactFormField" type="text" id="from_email" name="from_email" />
            </div>      
            <label for="email_message">Message</label>
            <input className="contactFormField" type="text" id="email_message" name="email_message" />
            <input id="submitButton" type="submit" value="Send" />
        </form>
    </div>
    </>
}

export default Contact
