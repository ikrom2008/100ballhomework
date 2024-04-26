import { useDispatch, useSelector } from 'react-redux'
import './Main.css'
import { togleWishlist } from '../context/productSlice'
import { Link } from 'react-router-dom'
import { addToCart } from '../context/cartSlice'
import { useEffect } from 'react'

function Main({product}) {
  let wish = useSelector(state => state.wishlist.value)
 let dispatch = useDispatch()
  let hours = new Date().getHours()
  let days = new Date().getDay()
  let minutes = new Date().getMinutes()
  let secunds = new Date().getSeconds()
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  let pr = product?.map((item) => (
    <li key={item.id} className='list'>
        <div className='likeact'>
        <Link to={`/product/${item.id}`}>
        <img src={item.image} alt="" />
        </Link>
        <div className='likebtn'>
        <button onClick={() => dispatch(togleWishlist(item))} >{wish.some(w => w.id === item.id) ?<i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
        </button>
        <button onClick={() => dispatch(addToCart(item))}><i className="fa-solid fa-cart-shopping"></i></button>
        </div>
        </div>
        <h5>{item.title.slice(0,50)}</h5>
        <div className='price'>
            <p><span className='spanprice'>${item.price}</span> <span className='spancount'>${item.rating.count}</span></p>            
        </div>
    </li>
))
let prs = pr.slice(0,4)
let prs2 = pr.slice(4,12)
  return (
    <div>
      <main className="main">
        <section className="thismonth">
            <h5>This Month</h5>
            <div className='newdiv'>
              <h2>Best Selling Products</h2>
              <button>View All</button>
            </div>
            <ul className='lists'>
              {
                prs
              }
            </ul>
        </section><br /><br />
        <section className='musicplay'>
          <div className='timer'>
            <h6>Categories</h6>
            <h3>Enhance Your<br />Music Experience</h3>
            <div className='alltime'>
              <div className='times'>
              <p>{hours} <br /> Hours</p>
            </div>
            <div className='times'>
              <p>{days} <br /> Days</p>
            </div>
            <div className='times'>
              <p>{minutes} <br /> Minutes</p>
            </div>
            <div className='times'>
              <p>{secunds} <br /> Secunds</p>
            </div>
            </div>
            
            <div className='btn'>
            <button>Buy Now!</button><div></div>
            </div>
          </div>
              <img src="Frame 694.svg" alt="" />
        </section><br /><br />
        <section className='allpr'>
              <h6>Our Products</h6>
              <div className='title'>
                <h3>Explore Our Products</h3>
                <div>
                  <button><i className="fa-solid fa-arrow-left"></i></button>
                  <button><i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>
              <ul className='lists'>
                {
                  prs2
                }
              </ul>
              <button className='button'>View All Products</button>
        </section>
      </main><br /><br /><br />
    </div>
  )
}

export default Main
