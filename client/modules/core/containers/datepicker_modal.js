import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DatepickerModal from '../components/datepicker_modal.jsx';

export const composer = ({context, id, date}, onData) => {
  const {Meteor, Collections} = context();
  console.log(date, 'date');
  onData(null, {id, date});
};

export const depsMapper = (context, actions) => ({
  update: actions.timer.update,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DatepickerModal);
