import { HashLink } from 'react-router-hash-link'
import Footer from '../components/footer'
import flourish from '../assets/flourish.png'

function ContactUs() {
  return (
    <div className="Content" id="contact">
      <h1>Contact Us</h1>
      <img src={flourish} className='flourish'/>
      <p className="content_text">Savannah and Jeremiah's love story is one of true romance. From the moment they first met in high school, they both knew that they were meant to be together. It has been an amazing journey ever since - through all the highs and lows, laughter and tears - their bond was never broken. </p>
      <p className="content_text">Now, after years of being together, Savannah and Jeremiah are finally taking the next big step in their relationship: getting married! They can't wait to spend the rest of their lives as husband and wife. </p>
      <p className="content_text" id="last">We wish this wonderful couple all the best for a long and happy marriage filled with love. Congratulations Savannah & Jeremiah!</p>
      <div className='nav_container'>
        <HashLink to={'/#rsvp'} className='enter'>Back</HashLink>
        <HashLink to={'/#top'} className='enter'>To Top</HashLink>   
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs