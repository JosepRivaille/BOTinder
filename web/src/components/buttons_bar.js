import React, {Component} from 'react';

import ValorationButton from "./valoration_button";

class ButtonsBar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    onValorationClick(liked) {
        this.props.onValorationClick(liked);
    }

    render() {
        const likeButton = {
            icon: 'fa-heart-o',
            color: '#00D794',
            liked: true
        };

        const dislikeButton = {
            icon: 'fa-times',
            color: '#FF4D60',
            liked: false
        };

        return (
            <div className="center-align button-container">
                <ValorationButton onValorationClick={this.onValorationClick} value={likeButton}/>
                <ValorationButton onValorationClick={this.onValorationClick} value={dislikeButton}/>
            </div>
        );
    }
}

export default ButtonsBar;