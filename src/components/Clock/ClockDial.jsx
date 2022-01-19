import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

//components
import ClockHour from '../Clock/ClockHour';
import ClockMinute from '../Clock/ClockMinute';

//database
import {hours} from './data/hours';
import {minutes} from './data/minutes';

//stylesheets
import '../../assets/css/_circlebar.scss';

const ClockDial = props => {
  
    const [offset, setOffset] = useState(0);
    const [progressBar, setProgressBar] = useState(0);
    //pause the progressBar count on hover
    const [hover, setHover] = useState(false);

    const circleRef = useRef(null);

    const {
        size,
        speed,
        strokeWidth,
        progress,
        circleOneStroke,
        circleTwoStroke,
        trailSpaced
    } = props;

    const circleConfig = {
        viewBox: '0 0 512 512',
        x: size / 2,
        y: size / 2,
      }

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    //const pace = progressBar  / speed;
    
    //Circle stroke animation
    const updatePercentage = () => {    
      setTimeout(() => {
        setProgressBar(progressBar + 0.1);
          const progressOffset = ((100 - progressBar) / 100) * circumference;
          setOffset(progressOffset);        
      }, 30);     
    };
  
    useEffect(() => {
      if (progressBar < progress) {
        if(hover) return;
        else updatePercentage();
      } else {
        setProgressBar(0);
      }
    }, [setOffset, circumference, progressBar, offset, hover, progress]);

    return (
        <>
          <svg 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="svg" xmlns="http://www.w3.org/2000/svg" viewBox={circleConfig.viewBox} width={size} height={size}>
                <circle 
                    className="svg-circle-default"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeMiterlimit={10}
                    strokeWidth={0.923}
                    strokeDasharray={trailSpaced ? 1 : 0}
                    strokeDashoffset={2e-05}
                /> 
                <circle
                    className="svg-circle-progress"
                    ref={circleRef}
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={2.2}
                    strokeMiterlimit={10}
                    strokeDasharray={[1485.72, 1495.72]}
                    strokeDashoffset={offset}
                />
              
                  <ClockHour time={hours} />
                  <ClockMinute time={minutes}/>
            </svg>
        </>    
    );
}

ClockDial.propTypes = {
    size: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    circleOneStroke: PropTypes.string.isRequired,
    circleTwoStroke: PropTypes.string.isRequired,
    trailSpaced: PropTypes.bool
}


export default ClockDial;