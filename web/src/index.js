import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import ButtonsBar from "./components/buttons_bar";
import Description from "./components/description";
import ImageSlider from "./components/image_slider";

class App extends Component {

    API_PROFILE_1 = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg';
    API_PROFILE_2 = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_1.jpg';
    API_PROFILE_3 = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_2.jpg';
    API_PROFILE_4 = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_3.jpg';

    constructor(props) {
        super(props);
        this.state = {};
        this.getProfile();
    }

    getProfile() {
        const self = this;
        axios.get(this.API_PROFILE_1)
            .then(function (profile) {
                self.setState({
                    profile: {
                        description: 'Yasuo',
                        images: [
                            self.API_PROFILE_1, self.API_PROFILE_2, self.API_PROFILE_3, self.API_PROFILE_4
                        ]
                    }
                });
            })
            .catch(function (err) {
                console.error(err);
            })
    }

    valorateProfile(liked) {
        axios.post(this.API_PROFILE_1, {liked})
            .then(function () {
                this.getProfile();
            })
            .catch(function (err) {
                console.error(err);
            })
    }

    render() {
        if (!this.state.profile) {
            return <p>Fetching data...</p>;
        } else {
            return (
                <div>
                    <ImageSlider images={this.state.profile.images}/>
                    <Description description={this.state.profile.description}/>
                    <ButtonsBar onValorationClick={this.valorateProfile}/>
                </div>
            );
        }
    }
}

ReactDOM.render(<App/>, document.querySelector('#body'));