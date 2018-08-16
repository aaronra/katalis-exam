import {Timer, IcoList} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('timer', function () {
    return Timer.find();
  });
  Meteor.publish('IcoList', function () {
    return IcoList.find();
  });

}
