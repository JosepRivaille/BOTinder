import React, {Component} from 'react';
import Image from "./image";

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: props.images
        };
    }

    render() {
        const images = this.state.images;

        if (!images || !images.length) {
            return <p>Fetching data...</p>;
        } else {
            return <Image image={images[0]}/>;
        }
    }
}

export default ImageSlider;