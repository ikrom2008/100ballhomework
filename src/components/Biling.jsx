import { useDispatch, useSelector } from 'react-redux'
import './hero/Hero.css'
import { removeFromCart } from './context/cartSlice'
import { useState } from 'react'

function Biling() {
    const [promo , setPromo] = useState('')
    const [count , setCount] = useState(0)
    const [name , setName] = useState('')
    const [address , setAddress] = useState('')
    const [apartiment , setApartiment] = useState('')
    const [number , setNumber] = useState()
    const arr = [
        {
            name,
            address,
            apartiment,
            number
        }
    ]
    let dispatch = useDispatch()    

    const carts = useSelector(state => state.cart.value)    
    let totalPrice = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);

    let product = carts?.map((item) => (
        <li key={item.id}>
            <div>
                <img src={item.image} alt="" />
                <h4>{item.title.slice(0,18)}</h4>
            </div>
            <h4 className='prss'>${item.price} x {item.quantity} = ${item.price * item.quantity}</h4>
            <button onClick={() => dispatch(removeFromCart(item))}>Delete</button>
        </li>
    ))
    function prom()  {
        if (promo == 'laylo') {
             setCount(totalPrice / 2)
        }
    }
  return (
    <>
    <div className="bil">
      <h2>Billing Details</h2><br /><br />
      <div className='totalpr'>
        <div className='inputs'>
            <input value={name} type="name" name="" id="" placeholder='First Name' onChange={(e) => setName(e.target.value)} />
            <input value={address} type="address" name="" id="" placeholder='Street Address*' onChange={(e) => setAddress(e.target.value)} />
            <input value={apartiment} type="text" name="" id="" placeholder='Apartment, floor, etc. (optional)' onChange={(e) => setApartiment(e.target.value)} />
            <input value={number} type="number" name="" id="" placeholder='Phone Number*' onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => console.log(arr)}>Add All In Object</button>
        </div>
        <div className="info">
            <ul>
                {
                    product
                }
            </ul><br />
            <div className="totalsum">
            <li>Subtotal: <p>${totalPrice}</p></li><br />
            <li style={{gap: '53%'}} >Shipping: <p>{count > 0 ? 'Promocod 2 Barobar arzon' : 'Promocod ishlatilmagan'}</p></li><br />
            <li style={{gap: '85%'}}>Total: <p>${count > 0 ? count : totalPrice}</p></li><br />
        </div>
        <div className='fram'>
            <p>Bank</p>
            <img src="Frame 834.png" alt="" />
        </div><br />
        <p style={{width: '100%'}}>2 Barobar Skidka Uchun Promocod : laylo , </p><br />
        <div className='cupon'>
                <input type="text" name="" id="" placeholder='Cupon Code' value={promo} onChange={(e) => setPromo(e.target.value)} />
                <button onClick={() => prom()}>Apply Cupon</button>
        </div><br />
        <div className='btnor'>
        <button className='order'>Place Order</button>
        </div>
        </div>
      </div>
    </div><br /><br /><br />
    </>
    
  )
}

export default Biling
