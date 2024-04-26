import { useEffect } from 'react'
import './Footer.css'
function Footer() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <footer className='footer'>
        <div className='links'>
            <ul className='exclusive'>
                <li style={{fontSize: '24px',fontWeight: '700'}}>Exclusive</li>
                <li>Subscribe</li>
                <li>Get 10% off your first order</li>
                <li><input type="text" name="" id="" placeholder='Enter your email' /></li>
            </ul>
            <ul className='exclusive'>
                <li style={{fontSize: '20px',fontWeight: '500'}}>Support</li>
                <li>111 Bijoy sarani, Dhaka<br />DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
            </ul> 
            <ul className='exclusive'>
                <li style={{fontSize: '20px',fontWeight: '500'}}>Account</li>
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
            </ul>
            <ul className='exclusive'>
                <li style={{fontSize: '20px',fontWeight: '500'}}>Quick Link</li>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Conteact</li>
            </ul>
            <ul className='exclusive'>
                <li style={{fontSize: '20px',fontWeight: '500'}}>Download App</li>
                <li>Save $3 with App New User Only</li>
                <li><img src="Qr Code.png" alt="" /></li>
                <li><i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-linkedin-in"></i></li>
            </ul>
        </div><br /><br /><br /><br /><br />
        <p>Copyright Rimel 2022. All right reserved</p>
      </footer>
    </div>
  )
}

export default Footer
