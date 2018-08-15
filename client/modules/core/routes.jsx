import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Timer from './components/timer';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: '',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Timer />)
      });
    }
  });

}
