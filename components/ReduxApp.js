import React from 'React';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer'
import App from './App'
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import Inspector from 'redux-devtools-inspector';

var DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-q"
               changeMonitorKey="ctrl-m"
               defaultIsVisible={false}>
    <Inspector />               
  </DockMonitor>
);
var store = createStore(rootReducer, {}, compose(DevTools.instrument()))

var ReduxApp = (props) =>
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>

export default ReduxApp;