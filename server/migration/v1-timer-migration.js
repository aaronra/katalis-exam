import {Timer} from '/lib/collections';

Migrations.add({
  version: 1,
  name: 'Add default timer date',
  up: function () {
    loadTimer();
  }
});
const loadTimer = () => {
  console.info('Loading timer');
  const data = {
    timerDate: '08/15/2019 12:23 PM',
  }

  Timer.insert(data);

};
