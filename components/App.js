import React from 'React';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer'
import Hello from './Hello';

var store = createStore(rootReducer)

class App extends React.Component {
  render(){
    return (<Hello />);
  }
}

var ReduxApp = (props) =>
  <Provider store={store}>
    <App />
  </Provider>

export { App, ReduxApp };  