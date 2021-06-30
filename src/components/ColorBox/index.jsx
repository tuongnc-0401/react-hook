import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

const getRandomColor = () => {
    const ColorList = ['deeppink', 'yellow', 'black', 'blue', 'orange'];
    const colorIndex = Math.trunc(Math.random()*5);
    return ColorList[colorIndex];
}

function ColorBox(props) {
    const [color, setColor] = useState('deeppink');

    const handleBoxClick = () => {
        var newColor = getRandomColor();
        setColor(newColor);
    }

    return (
        <div className="color-box" style={{backgroundColor: color}}
                onClick={()=>handleBoxClick()}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;