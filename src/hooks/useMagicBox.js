import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';


const random_hex_color_code = (prevColor) => {
    console.log(prevColor);
    let randomColor = prevColor;
    while (randomColor === prevColor) {

        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        randomColor = '#' + n.slice(0, 6);
    }
    return randomColor;
};

function randomColor(prevColor) {
    const COLOR_LIST = ['red', 'green', ' yellow'];
    const currentIndex = COLOR_LIST.indexOf(prevColor);
    let randomIndex = currentIndex;
    while (currentIndex === randomIndex) {
        randomIndex = Math.trunc(Math.random() * 3);
    }
    return COLOR_LIST[randomIndex];

}


function useMagicBox(props) {
    const [color, setColor] = useState('transparent')


    const prevColor = useRef('transparent');

    useEffect(() => {
        const colorInterval = setInterval(() => {
            //const newColor = randomColor(prevColor.current);
            const newColor = random_hex_color_code(prevColor.current);
            setColor(newColor);
            prevColor.current = newColor;



        }, 1000);


        return () => {
            clearInterval(colorInterval);
        }

    }, []);

    return color;
}

export default useMagicBox;