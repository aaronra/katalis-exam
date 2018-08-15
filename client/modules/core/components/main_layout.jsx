import React from 'react';
import {Offline, Online} from "react-detect-offline";

const Layout = ({content = () => null}) => (
  <main>
    <div className="container">
      <Online>{content()}</Online>
      <Offline>Only shown offline (surprise!)</Offline>

    </div>
  </main>
);

export default Layout;
