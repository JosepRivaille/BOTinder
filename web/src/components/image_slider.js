import React, {Component} from 'react';

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
            return <div>Hola</div>;
        }
    }
}

export default ImageSlider;