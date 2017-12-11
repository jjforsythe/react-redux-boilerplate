import {  
  incrementCounter
} from './actions';

import { connect } from 'react-redux';

import App from './components/App';  

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({  
  counter: state.counter,
});

const mapDispatchToProps = {  
  incrementCounter
};

const AppContainer = connect(  
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;  