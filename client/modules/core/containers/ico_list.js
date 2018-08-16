import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import IcoList from '../components/ico_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  const subscriptionReady = [
    Meteor.subscribe('IcoList').ready()];
  const IcoList = Collections.IcoList.find().fetch();
  const dataReady = () => {
    onData(null, {IcoList});
  };
  (subscriptionReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({

  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(IcoList);
