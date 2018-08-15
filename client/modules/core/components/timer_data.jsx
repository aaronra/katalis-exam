import React from 'react';

class TimerData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {timer} = this.props;
    return (
      <div>
        <div className="d-inline-block">
          <h5>Days</h5>
          <div className="cd-number">{timer.days}</div>
        </div>
        <div className="d-inline-block">
          <div className="cd-number">:</div>
        </div>
        <div className="d-inline-block">
          <h5>Hrs</h5>
          <div className="cd-number">{timer.hours}</div>
        </div>
        <div className="d-inline-block">
          <div className="cd-number">:</div>
        </div>
        <div className="d-inline-block">
          <h5>Min</h5>
          <div className="cd-number">{timer.minutes}</div>
        </div>
        <div className="d-inline-block">
          <div className="cd-number">:</div>
        </div>
        <div className="d-inline-block">
          <h5>Sec</h5>
          <div className="cd-number">{timer.seconds}</div>
        </div>
      </div>
    );
  }
}

export default TimerData;
