
export default {
  update({Meteor, LocalState}, id, timerDate) {
    Meteor.call('timer.update', id, timerDate);
  },
  getList({Meteor}) {
    Meteor.call('scrape', (error, result) => {
      if (error) console.log('error', error);
      console.log('result', result);
      IcoList.batchInsert(result)

    });
  }
};
