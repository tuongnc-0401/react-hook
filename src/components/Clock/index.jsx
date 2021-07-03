import React from 'react';
import useClock from '../../hooks/useClock';



Clock.propTypes = {

}



function Clock(props) {
    const {timeString} = useClock();
   
    return (
        <p style={{fontSize: '40px'}}>
            {timeString}
        </p>
    );
}

export default Clock;


