import {Timer, IcoList} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import Xray from 'x-ray'

export default function () {
  Meteor.methods({
    'timer.update'(id, timerDate) {
      console.log(id, timerDate);
      Timer.update({_id: id}, {$set: {timerDate}});
    },
    'scrape'() {
      let x = Xray()
      return new Promise((r, e) => {
        x('https://topicolist.com/ongoing-icos/',
          x('tr.listing-feed', [{
            img: 'img@src',
            link: 'td.ico-name a@href',
            name: 'td.ico-name a h4',
            description: 'td.ico-description',
            date: 'td.date',
            status: 'td.ico-name .label-wrapper .status-label'
          }])
        )(function (err, fn) {
          if (err) e(err);
          if (fn) {
            r(fn)
          }
          ;
        });

      });

    }
  });
  Meteor.call('scrape', (error, result) => {
    if (error) console.log('error', error);
    IcoList.batchInsert(result);
  });
}



