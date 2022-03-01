import React from 'react';

//stylesheet
import '../../assets/css/_circlebar.scss';

const ClockMinute = ({time}) => {

    return(
        <>
            <g className="clock__dial__minutes">
                {time.map((minute, index) => (
                <React.Fragment key={index}>
                    <line minute={minute.minute} key={index} fill={'none'} strokeMiterlimit={10} x1={minute.x1} y1={minute.y1} x2={minute.x2} y2={minute.y2} strokeDashoffset={2e-05} strokeDasharray={'none'}></line>
                </React.Fragment>
                ))}  
            </g>
        </>
    );
};

export default ClockMinute;