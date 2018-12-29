import React, { Component } from 'react';
import ApplicationNav from './components/AppBar';
import AddExpense from './components/AddExpense';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
             <ApplicationNav />
             <br /> <br />
             <AddExpense />
      </Provider>  
    );
  }
}

export default App;
