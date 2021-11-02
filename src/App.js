import React from 'react';
import classNames from 'classnames';
import CircleBar from './components/CircleBar/CircleBar';

function App() {
  const svgClass = classNames('clock', 'projects_clock')
  return (
    <div className="App">
      <div className={svgClass}>
        <CircleBar
          speed={1}
          size={500}
          progress={100}
          strokeWidth={1}
          circleOneStroke='#fff'
          circleTwoStroke='#ff0000'
          trailSpaced={false}
        />
      </div>
    </div>
  );
}

export default App;
