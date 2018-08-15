import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Timer from '../components/timer.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  const subscriptionReady = [
    Meteor.subscribe('timer').ready()];
  const timerDate = Collections.Timer.findOne();
  console.log(timerDate,'test');
  const dataReady = () => {
    onData(null, {timerDate});
  };
  (subscriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Timer);
