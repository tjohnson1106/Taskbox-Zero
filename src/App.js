
import React, { PropTypes } from 'react';
import { Route } from 'react-router-dom';

import MenuScreen from './MenuScreen';
import InboxScreen from './InboxScreen';
import SnoozedScreen from './SnoozedScreen';
import ArchivedScreen from './ArchivedScreen';

const App = () => (
  <div id="container" className="menuOpen">
    <MenuScreen />
    <div id="content-container">
      <Route exact path="/" component={InboxScreen} />
      <Route exact path="/snoozed" component={SnoozedScreen} />
      <Route exact path="/archived" component={ArchivedScreen} />
    </div>
  </div>
);

export default App;