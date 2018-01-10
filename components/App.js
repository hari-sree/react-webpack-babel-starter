import React from 'React';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import rootReducer from '../reducers/rootReducer'
import Hello from './Hello';

var store = createStore(rootReducer)

class App extends React.Component {
  componentDidMount(){
    this.props.initialize();
  }
  render(){
    return (<Hello />);
  }
}

App.propTypes = {
  initialize : PropTypes.func
}

export default connect((state)=> ({}), (dispatch) => {
  return {
    initialize : () => {
      dispatch({
        type: 'INIT_APP'
      });
    }
  }
})(App);