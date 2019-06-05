import React, { Component } from "react";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Slide from "./Slide";

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    let images = [
      "./images/home-shelves.jpg",
      "./images/2.jpg",
      "./images/3.jpg",
      "./images/4.jpg",
      "./images/5.jpg",
      "./images/6.jpg"
    ]
    this.state = {
      images,
      currentIndex: 0,
      fade: 'fadeIn',
      fadeImg: 'fadeIn',
      prevIndex: images.length - 1
    };
  }

  prevImage = () => {
    this.setState(prevState => ({
      fade: 'fadeOut',
      currentIndex:
        prevState.currentIndex - 1 < 0 ? this.state.images.length - 1 : prevState.currentIndex - 1
    }));
  };

  nextImage = () => {
    this.setState(prevState => ({
      fade: 'fadeOut',
      currentIndex: prevState.currentIndex + 1 > this.state.images.length - 1 ? 0 : prevState.currentIndex + 1
    }));
  };

  render() {

    return (
      <div className="carousel-container">
        <div className="carousel-slide">
          <Slide src={this.state.images[this.state.currentIndex]} prevSrc={this.state.images[this.state.prevIndex]}/>
        </div>
        <img id='main-logo' className={this.state.fade} src='./images/langbaanlogo.png' alt=''/>
        <LeftArrow prevImage={this.prevImage} />
        <RightArrow nextImage={this.nextImage} />
      </div>
    );
  }
}

export default PhotoGallery;
