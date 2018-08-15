import React from 'react';
import moment from 'moment-timezone';

class DatepickerModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.datetimepicker').datetimepicker();

  }

  save() {
    const {id, update} = this.props;
    const {timerDate} = this.refs;
    console.log(id, 'id');
    console.log(timerDate.value);
    update(id, timerDate.value);
  }

  render() {
    const {date} = this.props;
    let timezone = moment.tz.guess();
    let ctz = moment().tz(timezone).format('llll');
    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Change Date and Time</h4>
            </div>
            <div className="modal-body">
              <h3>{timezone}</h3>
              <h4>{ctz}</h4>
              <div className="input-group datetimepicker">
                <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
                <input className="set-due-date form-control" value={date} type="text" ref="timerDate"/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" data-dismiss="modal" onClick={this.save.bind(this)} className="btn btn-primary">Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DatepickerModal;
