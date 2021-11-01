import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './_circlebar.scss';

const CircleBar = props => {
    
    const [offset, setOffset] = useState(0);
    const [progressBar, setProgressBar] = useState(0);

    const circleRef = useRef(null);

    const {
        size,
        speed,
        strokeWidth,
        percentage,
        circleOneStroke,
        circleTwoStroke,
        trailSpaced
    } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const pace = percentage / speed;

    //Circle stroke Animation
    const updatePercentage = () => {
      setTimeout(() => {
        setProgressBar(progressBar + 1);
      }, pace);
    };
  
    useEffect(() => {
      if (percentage > 0) updatePercentage();
    }, [percentage]);
  
    useEffect(() => {
      if (progressBar < percentage) updatePercentage();
    }, [progressBar]);

    // useEffect(() => {
    //     const progressOffset = ((100 - progress) / 100) * circumference;
    //     setOffset(progressOffset);

    //     circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';
    // }, [setOffset, circumference, progress, offset]);

    return (
        <>
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
                <circle
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
                    strokeWidth={2}
                    strokeDasharray={`${progressBar} ${100 - progressBar}`}
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