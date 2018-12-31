import React, { Component } from 'react';
import ApplicationNav from './components/AppBar/navbar';
import AddExpense from './components/AddExpense';
import { Provider } from 'react-redux';
import { Router , Route , Switch } from 'react-router-dom';
import store from './store';
import ExpensesDashboard from './components/ExpensesDashboard';
import history from './routes/history';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <Router history={history}>
            <Switch>
            <Route exact strict path='/' component={AddExpense} />
            <Route exact strict path='/dashboard' component={ExpensesDashboard} />
            </Switch>
      </Router>
         
        
      </Provider>  
    );
  }
}

export default App;
