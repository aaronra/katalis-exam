import React from 'react';
import Countdown from 'react-countdown-now';

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }
  renderer({days, hours, minutes, seconds, completed }) {
    if (completed) {
            // Render a complete state
      return <span>You are good to go!</span>;
    } else {
            // Render a countdown
      return (
                <span>
        Days:{days} and
        Hours:{hours}:{minutes}:{seconds}
      </span>
            );
    }
  }


  render() {
    return (
      <div>
          <Countdown date={"Wed, 15 Aug 2018 12:00:03"} renderer={this.renderer} />
      </div>
    );
  }
}

export default Timer;
