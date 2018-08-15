import {Timer} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'timer.update'(id, timerDate) {
      console.log(id, timerDate);
      Timer.update({_id: id}, {$set: {timerDate}});
    }
  });
}
