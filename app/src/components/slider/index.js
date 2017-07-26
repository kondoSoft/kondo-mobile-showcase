import React from 'react';
import Slider from 'react-slick';

class SliderI extends React.Component {
  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><img src="img/screen-login.jpg" alt="Screen"/></div>
        <div><img src="img/screen-walkthrough.jpg" alt="Screen"/></div>
        <div><img src="img/screen-profile.jpg" alt="Screen"/></div>
      </Slider>
    );
  }
}

export default SliderI
