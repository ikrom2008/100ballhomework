import { useEffect, useState } from 'react';
import './Hero.css'
function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        showSlide(1);
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    useEffect(() => {
      window.scrollTo(0,0)
    },[])
    const showSlide = (n) => {
      setSlideIndex((prevIndex) => (prevIndex + n) % 3);
    };
    slideIndex < 0 ? setSlideIndex(2) : ''
  return (
    <div>
      <div className="hero">
        <ul>
          <li>Woman’s Fashion <i className="fa-solid fa-angle-right"></i> </li>
          <li style={{gap: '20px'}}>Men’s Fashion <i className="fa-solid fa-angle-right"></i></li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
        <div className="Slider">
        <div className="slider">
          <div className="slide fade" style={{ display: slideIndex === 0 ? 'flex' : 'none' ,     width: '950px' }}>
            <img  src="Frame 560.png"alt="Slide 1" />
          </div>
          <div className="slide fade" style={{ display: slideIndex === 1 ? 'flex' : 'none' ,     width: '950px' }}>
            <img src="maxresdefault.jpg" alt="Slide 2" />
          </div>
          <div className="slide fade" style={{ display: slideIndex === 2 ? 'flex' : 'none' ,     width: '950px' }}>
            <img src="a8222266-e285-495a-89e1-8212de321562-cover.png" alt="Slide 3" />
          </div>
        </div>
        <div className="controls">
          <button className='prev' onClick={() => showSlide(-1)}><i className="fa-solid fa-chevron-left"></i></button>
          <button className='next' onClick={() => showSlide(1)}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
      </div><br /><br />
    </div>
  )
}

export default Hero
