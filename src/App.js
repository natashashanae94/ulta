import React from 'react';
import classNames from 'classnames';

//Clock
import ClockDial from './components/Clock/ClockDial';

//Clock Background
import ClockBG from './components/Clock/ClockBG';

//database
import {hours} from './components/Clock/data/hours';

function App() {
  const svgClass = classNames('clock', 'projects_clock')
  return (
    <div className="App">
      <ClockBG bg={hours}/>
      <div className={svgClass}>
        <ClockDial
          speed={1}
          size={500}
          progress={100}
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
