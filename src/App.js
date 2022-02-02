import React from 'react';
import classNames from 'classnames';
import ClockDial from './components/Clock/ClockDial';

function App() {
  const svgClass = classNames('clock', 'projects_clock')
  return (
    <div className="App">
      <div className={svgClass}>
        <ClockDial
          speed={1}
          size={500}
          progress={92.3}
          strokeWidth={1}
          circleOneStroke='#fff'
          circleTwoStroke='#fff'
          trailSpaced={false}
        />
      </div>
    </div>
  );
}

export default App;
