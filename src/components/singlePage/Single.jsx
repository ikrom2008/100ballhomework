import { useParams } from "react-router-dom";
import '../../App.css'
import { useState } from "react";
function Single({product}) {
  const [count,setCount] = useState(1)
  const { id } = useParams();
  const { title , image , price , description } = product.find(user => user.id == id) || {};
  return (
    <div className="sigleel">
      <h6>Account / Gaming / {title}</h6>
      <div className="information">
          <img src={image} alt="" />
          <div className="elements">
            <h4 className="h4">{title.slice(0,28 )}</h4>
            <h5 className="h5">${price * count}</h5>
            <p>{description}</p>
            <p>__________________________________________________________________________________________________</p><br />
            <div className="bigcolor">
            <div className="colors">
              <h4>Colours:</h4>
              <img src="../../public/Colour Chnage.png" alt="" style={{width: '50px' , height: '22px'}} />
            </div>
            <div></div>
            </div><br />
            <div className="bigsize">
            <div className="size">
              <h4>Size:</h4>
              <button>XS</button>
              <button>S</button>
              <button style={{backgroundColor: 'rgba(219, 68, 68, 1)' , color: 'white' , border: 'none'}}>M</button>
              <button>L</button>
              <button>XL</button>
            </div><div></div>
            </div><br />
            <div className="bigshot">
            <div className="shot">
              <div className="count">
              <button disabled={count <= 1} onClick={() => setCount(count - 1)}>-</button>
              <h5>{count}</h5>
              <button  onClick={() => setCount(count + 1)} style={{backgroundColor: 'rgba(219, 68, 68, 1)' , color: 'white'}}>+</button>
              </div>
              <button className="buynow">Buy Now</button>
              <button className="likebuy"><i className="fa-solid fa-heart"></i></button>
            </div>
            <div></div>
            </div>
          </div>
      </div><br /><br /><br />
    </div>
  )
}

export default Single
