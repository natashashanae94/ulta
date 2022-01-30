import React, { useState, useRef } from 'react';

//stylesheet
import '../../assets/css/_circlebar.scss';

const ClockHour = ({time, matrix}) => {

    //Detect if the mouse approaches an hour dot
    const [focus, setFocus] = useState(false);

    const handleFocusEvent = (event) => {
        console.log(JSON.parse(event.target.dataset.info));
    }

    if(focus) {
        handleFocusEvent();
    }

      // if(circle) {
        //     let target = circle.getAttribute('key');
        //     console.log(target);
        // }

    const transform =  'matrix(1,0,0,1,0,0)';

    const hoursStyle = {
        transition: 'all .3s'
    }

    return(
        <>    
           <g class="clock__dial__hours">
           {time.map((hour, index) => (
               <>
                <circle
                    onMouseEnter={() => setFocus(true)}
                    onMouseLeave={() => setFocus(false)}  
                    className="clock__dial__hour" data-info={hour.name} stroke-miterlimit={10} cx={hour.cx} cy={hour.cy} r={60} key={index}>
                </circle>
                <circle 
                    className="clock__dial__hour__circle" hour={hour.name} stroke-miterlimit={10} fill={'none'} cx={hour.cx} cy={hour.cy} r={11} style={hoursStyle} transform={focus ? transform : hour.matrix } stroke-opacity={focus ? 1 : 0.4} data-svg-origin={hour.origin}>
                </circle>
               </>
            ))}                
           </g> 
        </>
    );
}

export default ClockHour;