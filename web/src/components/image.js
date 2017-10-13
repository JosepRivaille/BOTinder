import React from 'react';

const Image = ({image}) => {
    if (!image){
        return (<div>Image not found</div>);
    }

    const url = image.url;
    return (
        <img src={url}/>
    );
}

export default Image;