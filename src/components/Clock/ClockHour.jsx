import React from 'react';

//stylesheet
import '../../assets/css/_circlebar.scss';

const ClockHour = ({time, matrix}) => {


    //Define the inline style for Circle Hours

    const hoursStyle = {
        transform: 'matrix(1,0,0,1,0,0)',
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
                    <circle className="clock__dial__hour" hour={hour.name} stroke-miterlimit={10} cx={hour.cx} cy={hour.cy} r={60} key={index} transform={hour.matrix} ></circle>
                    <circle className="clock__dial__hour__circle" stroke-miterlimit={10} fill={'none'} cx={hour.cx} cy={hour.cy} r={7} key={index} style={hoursStyle}></circle>
               </>
            ))}                
           </g> 
        </>
    );
}

export default ClockHour;