import React from 'react'
import Carousel from 'nuka-carousel'
import reactImg from '../images/logos/react-img.png'
import expressImg from '../images/logos/express-img.png'
import webFundImg from '../images/logos/webfund-img.png'
import nodeImg from '../images/logos/node-img.png'
import mongoImg from '../images/logos/mongo-img.png'
import mongooseImg from '../images/logos/mongoose-img.png'

export default class extends React.Component {
  render() {
    return (
      <Carousel
        className="slide"
        autoplay="true"
        wrapAround="true"
        defaultControlsConfig={{
          prevButtonStyle: {
            opacity: '0',
          },
          nextButtonStyle: {
            opacity: '0',
          },
          pagingDotsStyle: {
            opacity: '0',
          },
        }}
      >
        <img className="carousel-img" src={webFundImg} alt="webfund logo" />
        <img className="carousel-img" src={reactImg} alt="react logo" />
        <img className="carousel-img" src={expressImg} alt="express logo" />
        <img className="carousel-img" src={nodeImg} alt="node logo" />
        <img className="carousel-img" src={mongoImg} alt="mongodb logo" />
        <img className="carousel-img" src={mongooseImg} alt="mongoose logo" />
      </Carousel>
    )
  }
}
