import React from 'react'
import "./Contact.css"

const Contact = () => {

  return (
    <div className="container">
      <form >

        <label htmlFor="fname">First Name</label>
        <input className='contact-input' type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Last Name</label>
        <input className='contact-input' type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label htmlFor="country">Country</label>
        <select className='contact-input' id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label htmlFor="subject">Subject</label>
        <textarea className='contact-input' id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

        <input type="submit" value="Submit" />

      </form>
    </div>
  )
}

export default Contact