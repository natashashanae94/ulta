import React from 'react';

//stylesheet
import '../../assets/css/_circlebar.scss';

const ClockMinute = ({time}) => {

    return(
        <>
            <g class="clock__dial__minutes">
                {time.map((minute, index) => (
                <>
                    <line minute={minute.minute} key={index} fill={'none'} stroke-miterlimit={10} x1={minute.x1} y1={minute.y1} x2={minute.x2} y2={minute.y2} stroke-dashoffset={2e-05} stroke-dasharray={'none'}></line>
                </>
                ))}  
            </g>
        </>
    );
};

export default ClockMinute;