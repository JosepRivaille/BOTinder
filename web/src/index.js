import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import ButtonsBar from "./components/buttons_bar";
import Description from "./components/description";
import ImageSlider from "./components/image_slider";

class App extends Component {

    API_PROFILE = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_1.jpg';

    constructor(props) {
        super(props);
        this.state = {};
        this.getProfile();
    }

    getProfile() {
        axios.get('API_PROFILE')
            .then(function (profile) {
                this.setState({
                    profile: {
                        description: 'Yasuo',
                        images: [
                            profile, profile
                        ]
                    }
                });
            })
            .catch(function (err) {
                console.error(err);
            })
    }

    render() {
        return (
            <div>
                <ImageSlider images={this.state.images}/>
                <Description/>
                <ButtonsBar/>
            </div>
        );
    }
};

ReactDOM.render(<App/>, document.querySelector('#body'));