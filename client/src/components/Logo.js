import React, { Component } from 'react';

import image2 from '../images/birthday-cake.svg';


class Logo extends Component {
    render() {
        return (
            <img width={320} height={240} alt="taste test logo" src={image2} />
        );
    }
}

export default Logo;
