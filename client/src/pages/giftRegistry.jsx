import { HashLink } from 'react-router-hash-link'
import Footer from '../components/footer'
import flourish from '../assets/flourish.png'

function Registry() {
  return (
    <div className="Content" id="wedding-registry">
      <h1>Wedding Registry</h1>
      <img src={flourish} className='flourish'/>
      <p className='content_text'>What a thrilling occasion it is - Jeremiah and Savanna's wedding day. They are certain to be creating many beautiful memories together, and if you'd like to help them commemorate this special occasion, the couple have kindly provided gift registries at the following locations so that their guests can find something of joy to celebrate their union.</p>
      <a href='https://www.amazon.com/wedding/'><p className='content_text'>wedding registry</p></a>
      <div className='nav_container'>
        <HashLink to={'/#travel-and-lodging'} className='enter'>Back</HashLink>
        <HashLink to={'/#rsvp'} className='enter'>Next</HashLink>   
      </div>
      <Footer/>
    </div>
  )
}

export default Registry