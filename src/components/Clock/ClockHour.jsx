import React, { useState } from 'react';

//stylesheet
import '../../assets/css/_circlebar.scss';

const ClockHour = ({time, hourClick, transitionState}) => {

    //Detect if the mouse approaches an hour dot
    const [focus, setFocus] = useState(false);
    const [targetHour, setTargetHour] = useState("");
    const [click, setClick] = useState(false);
    const [clickedHour, setClickedHour] = useState("")

    const handleFocusEvent = (event) => {
        //identify the name of the hour dot; print console value.
        let obj = event.target.dataset.info;
        setFocus(true);

        //Expand the current hour circle when hovered on.
        let currentHour = event.target.getAttribute("data-info");
        let expandCircle = document.querySelector(`.clock__dial__hour__circle[data-info='${currentHour}']`);

        setTargetHour(currentHour);  
    }

    const handleLeaveFocusEvent = (event) => {
        setFocus(false);
        setTargetHour("");
    
    }

    const handleClickEvent = (event) => {
        setClick(true);
    
        //Variables
        let currentHour = event.target.getAttribute("data-info");
        let fillCircle = document.querySelector(`.clock__dial__hour__circle[data-info='${currentHour}']`);

        //Set current hour to 'clicked hour'
        setClickedHour(currentHour);
        console.log(`${currentHour} has been clicked!`);

        //Add transition class to svg progress bar, then remove it after .7 seconds
        let bigCircle =  document.querySelector('.svg-circle-progress');
        bigCircle.classList.add('svg-transition');
        setTimeout(() => {
            bigCircle.classList.remove('svg-transition');
        }, 700);   
    

        bigCircle.addEventListener('transitionend', function() {
            console.log('transitionend ended');
        });

        transitionState();
        
        //Get the progress value from the current 'clicked hour', then send that prop value back
        let currentHourProgress = event.target.getAttribute("progress");
        console.log(currentHourProgress);
        hourClick(parseInt(currentHourProgress));

    }

    const transform = 'matrix(1,0,0,1,0,0)';

    const hoursStyle = {
        transition: 'all .3s'
    }

    return(
        <>    
           <g className="clock__dial__hours">
           {time.map((hour, index) => (
            <React.Fragment key={index}>
                <circle
                    onMouseEnter={(e) => handleFocusEvent(e)}
                    onMouseLeave={(e) => handleLeaveFocusEvent(e)}
                    onClick={(e) => handleClickEvent(e)}

                    className="clock__dial__hour" 
                    progress={hour.progress}
                    data-info={hour.name} 
                    strokeMiterlimit={10} 
                    cx={hour.cx} 
                    cy={hour.cy} 
                    r={60} 
                    key={index}>
                </circle>
                <circle 
                    className="clock__dial__hour__circle" 
                    data-info={hour.name} 
                    strokeMiterlimit={10} 
                    fill={hour.name === clickedHour ? '#fff': 'none'} 
                    cx={hour.cx} 
                    cy={hour.cy} 
                    r={11} 
                    style={hoursStyle} 
                    transform={hour.name === targetHour || hour.name === clickedHour ? transform : hour.matrix} 
                    strokeOpacity={hour.name === targetHour ? 1 : 0.4}
                    fillOpacity={hour.name === clickedHour ? 1 : 0}
                    data-svg-origin={hour.origin}>
                </circle>  
            </React.Fragment>
            ))}                
           </g> 
        </>
    );
}

export default ClockHour;