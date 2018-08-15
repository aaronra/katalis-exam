import React from 'react';
import {Offline, Online} from "react-detect-offline";

const Layout = ({content = () => null}) => (
  <main>
    <div className="container">
      <Online>{content()}</Online>
      <Offline>

        <div className="row">
          <div className="offline">
            <h1>You're offline right now. Check your connection.</h1>
          </div>
        </div>

      </Offline>

    </div>
  </main>
);

export default Layout;
