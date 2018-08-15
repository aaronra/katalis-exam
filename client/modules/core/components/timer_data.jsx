import React from 'react';

class TimerData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {timer} = this.props;
    return (
        <h1>
          <span>Days [{timer.days}],</span>
          <span>Hours [{timer.hours}],</span>
          <span>Minutes [{timer.minutes}],</span>
          <span>Seconds [{timer.seconds}]</span>
        </h1>
    );
  }
}

export default TimerData;
