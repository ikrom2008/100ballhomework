import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import './main/Main.css'
import { incCart , decCart, removeFromCart, clearCart} from "./context/cartSlice"
import { useEffect, useState } from "react"
import Empty from "./Empty"
function Cart() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  const [promo , setPromo] = useState('')
  const [count , setCount] = useState(0)
  let navigate = useNavigate()
    let dispatch = useDispatch()
    const carts = useSelector(state => state.cart.value)
    const totalPrice = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
    function prom()  {
      if (promo == 'laylo') {
           setCount(totalPrice / 2)
      }
  }
    let pr = carts?.map((item) => (
        <li key={item.id} className='item'>
          <div className="itemname">
            <Link to={`/product/${item.id}`} style={{textDecoration: 'none', color: 'black', display: 'flex', justifyContent: 'center' , alignItems: 'center', gap: '15px'}}>
            <img src={item.image} alt="" />
            <h4>{item.title.slice(0,18)}</h4>
            </Link>
            </div>
            <p>${item.price}</p>
            <div className="quantity">
                <h6>{item.quantity}</h6>
                <div className="btns">
                <button onClick={() => dispatch(incCart(item))}><i className="fa-solid fa-angle-up"></i></button>
                <button disabled={item.quantity <= 1} onClick={() => dispatch(decCart(item))}><i className="fa-solid fa-angle-down"></i></button>
                </div>
            </div>
            <h5>{item.price * item.quantity}</h5>
            <button className="btnnn" style={{border: 'none' , backgroundColor: 'black' , height: '35px' , borderRadius: '10px', color: 'white'}} onClick={() => dispatch(removeFromCart(item))}>DELETE</button>
        </li>
    ))

  if (carts.length > 0) {
    return (
      <>
      <div className="cart_page">
      <div className="items">
        <li className="item">
          <div className="itemname">
          <h4>Product</h4>
          </div>
          <p style={{fontWeight: '700' , fontSize: '15px'}}>Price</p>
          <div className="quantity" style={{border: 'none' }}>
            <h4 style={{fontWeight: '700' , fontSize: '15px'}}>Quantity</h4>
          </div>
          <h5 style={{fontWeight: '700', fontSize: '15px'}}>Subtotal</h5>
          <h4 style={{fontWeight: '700', fontSize: '15px'}} className="btnnn">Delete</h4>
        </li>
        {
          pr
        }
      </div><br />
      <div className="return">
        <button onClick={() => navigate('/')}>Return To Shop</button>
        <button onClick={() => dispatch(clearCart())}>Update Cart</button>
      </div><br /><br /><p>Promocod: laylo </p>
        <div className="cartend">
          <div className="app">
            <input value={promo} type="text" name="" id="" placeholder="Coupon Code" onChange={(e) => setPromo(e.target.value)} />
            <button onClick={() => prom()}>Apply Coupon</button>
          </div>
          <div className="total">
            <h4>Cart Total</h4>
              <li>Subtotal: <p>${totalPrice}</p></li>
              <li style={{gap: '20%'}}>Shipping: <p>{count > 0 ? 'Promocod 2 Barobar arzon' : 'Promocod ishlatilmagan'}</p></li>
              <li style={{gap: '73%'}}>Total: <p>${count > 0 ? count : totalPrice}</p></li>
              <button onClick={() => navigate('/billing')}>Procees to checkout</button>
          </div>
        </div>
      </div>
      <br /><br />
      </>
    )
  }else{
    return <Empty />
  }
}

export default Cart
