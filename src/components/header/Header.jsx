import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
function Header() {

  let navigate = useNavigate()
  const wishes = useSelector(state => state.wishlist.value)
  const carts = useSelector(state => state.cart.value)
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div className='container'>
      <header className='heeader'>
        <nav className='nav'>
            <div className='info'>
                <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span>ShopNow</span>
                </p>
            </div>
            <div className='select'>
            <select name="" id="">
                <option value="">English</option>
            </select>
            </div>
        </nav><br /><br /><br />
        <div className='logos'>
            <h3 onClick={() => navigate('/')}>Exclusive</h3>
            <ul>
                <li onClick={()=> navigate('/')}><span>Home</span></li>
                <li onClick={() => navigate('/billing')}>Rasmiylashtirish</li>
                <li>About</li>
                <li>Sing Up</li>
            </ul>
            <div className='search'>
                <input type="text" name="" id="" placeholder='What are you looking for?' />
                <Link to='/wishlist'style={{textDecoration: 'none'}}>
                  <button className='wish'><i className="fa-regular fa-heart" ></i> <div className="sup"><sup>{wishes.length}</sup></div></button>
                </Link>
                <Link to='/cart' style={{textDecoration: 'none'}}>
                  <button className='wish'><i className="fa-solid fa-cart-shopping"></i> <div className="sup"><sup>{carts.length}</sup></div></button>
                </Link>
            </div>
        </div>
      </header><br /><br />
    </div>
  )
}

export default Header