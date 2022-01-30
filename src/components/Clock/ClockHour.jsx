import React, { useState } from 'react';

//stylesheet
import '../../assets/css/_circlebar.scss';

const ClockHour = ({time, matrix}) => {

    //Detect if the mouse approaches an hour dot
    const [focus, setFocus] = useState(false);

    const handleFocusEvent = (event) => {
        setFocus(true);

        //identify the name of the hour dot; print console value.
        let obj = event.target.dataset.info;
        console.log(obj);

          

        //if console value matches hour dot name, define transform style.
        
        
        
    }

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
                    onMouseEnter={(e) => handleFocusEvent(e)}
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