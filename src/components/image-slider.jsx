import React from 'react'
import image1 from '../assets/Nimboon screen 1.png'
import image2 from '../assets/Nimboon screen 2.png'
import image3 from '../assets/Nimboon screen 3.png'
import image4 from '../assets/Nimboon screen 4.png'
import image5 from '../assets/Nimboon screen 5.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'



function imageSlider() {
    let images = [image1, image2, image3, image4, image5]
    

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

  return (
    <div className='px-14 bg-primary'>
      <Slider {...settings} >
        {images.map(img => (
            <img src={img} key={img} alt="" style={{width: '33.33%'}} />
        ))}
      </Slider>

      
    </div>
  )
}

export default imageSlider
