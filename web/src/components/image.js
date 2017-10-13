import React from 'react';

const Image = ({image}) => {
    if (!image) {
        return (<div>Image not found</div>);
    }

    return (
        <img src={image}/>
    );
};

export default Image;