import React from 'react';
import Countdown from 'react-countdown-now';
import TimerDate from './timer_data';
import DatepickerModal from '../containers/datepicker_modal';

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderer({days, hours, minutes, seconds, completed}) {
    const data = {days, hours, minutes, seconds};
    if (completed) {
      // Render a complete state
      return (<div className="timer">
        <h1>00:00:00</h1>
      </div>);
    } else {
      // Render a countdown
      return (
        <div className="timer">
          <TimerDate timer={data}/>
        </div>
      );
    }
  }


  render() {
    const {timerDate} = this.props;

    return (
      <div className="row">
        <DatepickerModal id={timerDate._id} date={timerDate.timerDate}/>
        <div className="col-lg-12 full-height">
          <div className="center-block text-center">
            <Countdown date={timerDate.timerDate} renderer={this.renderer}/>
          </div>
        </div>
      </div>
    );
  }
}

Timer.defaultProps = {
  timerDate: '04/23/2019 12:00 AM',
};

export default Timer;
