import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        let i = 0;
        this.images = props.images.map((image) => {
            ++i;
            return (
                <div key={i}>
                    <img src={image}/>
                </div>
            );
        });
    }

    render() {
        const images = this.images;

        if (!images || !images.length) {
            return <p>Fetching data...</p>;
        } else {
            return (
                <Carousel autoPlay infiniteLoop showIndicators showArrows className="card-image">
                    {images}
                </Carousel>
            );
        }
    }
}

export default ImageSlider;