import React from 'react';

//stylesheet
import '../../assets/css/_circlebar.scss';

const ClockHour = ({time}) => {


    //Define the inline style for Circle Hours

    const hoursStyle = {
        transformOrigin: '0px 0px 0px',
        strokeOpacity: 0.4,
        fillOpacity: 0,
        transition: 'none 0s ease 0s'
    }

    return(
        <>    
           <g class="clock__dial__hours">
           {time.map((hour, index) => (
               <>
                    <circle className="clock__dial__hour" stroke-miterlimit={10} cx={hour.cx} cy={hour.cy} r={60} key={index}></circle>
                    <circle className="clock__dial__hour__circle" stroke-miterlimit={10} fill={'none'} cx={hour.cx} cy={hour.cy} r={9} key={index} style={hoursStyle}></circle>
               </>
            ))}                
           </g> 
        </>
    );
}

export default ClockHour;