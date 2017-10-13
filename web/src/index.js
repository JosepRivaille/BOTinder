import React from 'react';
import ReactDOM from 'react-dom';

import ButtonsBar from "./components/buttons_bar";
import Description from "./components/description";
import ImageSlider from "./components/image_slider";

const App = () => {
    
    return (
        <div>
            <ImageSlider/>
            <Description/>
            <ButtonsBar/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#body'));