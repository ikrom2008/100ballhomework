import { useDispatch, useSelector } from "react-redux"
import { togleWishlist } from "./context/productSlice"
import './main/Main.css'
import { Link } from "react-router-dom"
import { addToCart } from "./context/cartSlice"
import { useEffect } from "react"
import Empty from "./Empty"
function Wishlist() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
    let wish = useSelector(state => state.wishlist.value)
    let dispatch = useDispatch()
     let pr = wish?.map((item) => (
       <li key={item.id} className='list'>
           <div className='likeact'>
        <Link to={`/product/${item.id}`}>
        <img src={item.image} alt="" />
        </Link>
        <div className='likebtn'>
        <button        onClick={() => dispatch(togleWishlist(item))} >{wish.some(w => w.id === item.id) ?<i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
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
  if (wish.length > 0) {
    return (
      <div>
        <ul className="lists">
          {
          pr
        }
        </ul><br /><br />
      </div>
    )
  }else{
    return <Empty />
  }
}

export default Wishlist
