export default {
  update({Meteor, LocalState}, id, timerDate) {
    Meteor.call('timer.update', id, timerDate);
  }
};
