import React, { useEffect, useState, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import './_circlebar.scss';

const CircleBar = props => {
    
    const [offset, setOffset] = useState(0);
    const [progressBar, setProgressBar] = useState(0);
    
    //Pause the progressBar count on hover
    const useHover = () => {
        const [pause, setPause] = useState(false);

        const eventHandlers = useMemo(() => ({
            onMouseOver() { setPause(true); },
            onMouseOut() { setPause(false); }
        }), []);

        return [pause, eventHandlers];
    }

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
    const pace = progressBar  / speed;

    //Circle stroke animation
    const updatePercentage = () => {
      setTimeout(() => {
        setProgressBar(progressBar + 0.1);
        const progressOffset = ((100 - progressBar) / 100) * circumference;
        setOffset(progressOffset);        
        
      }, 30);
    };

    console.log(offset, progressBar)
  
    useEffect(() => {
      if (progressBar < progress) {
        updatePercentage();
      } else {
          setProgressBar(0);
      }
    }, [setOffset, circumference, progressBar, offset]);

     //Pause the progressBar count on hover
     const [pause, eventHandlers] = useHover();

    return (
        <>
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox={circleConfig.viewBox} width={size} height={size}>
                <circle {...eventHandlers}
                    className="svg-circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={0.923}
                    strokeDasharray={trailSpaced ? 1 : 0}
                />
                <circle
                    className="svg-circle"
                    ref={circleRef}
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={2.2}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
        </>
    );
}

CircleBar.propTypes = {
    size: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    circleOneStroke: PropTypes.string.isRequired,
    circleTwoStroke: PropTypes.string.isRequired,
    trailSpaced: PropTypes.bool
}


export default CircleBar;