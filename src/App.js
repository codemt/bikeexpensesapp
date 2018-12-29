import React, { Component } from 'react';
import ApplicationNav from './components/AppBar/navbar';
import AddExpense from './components/AddExpense';
import { Provider } from 'react-redux';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import store from './store';
import ExpensesDashboard from './components/ExpensesDashboard';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ApplicationNav />
      <BrowserRouter>
          <Switch>
            <Route exact={true} path='/' component={AddExpense} />
            <Route exact={true} path='/dashboard' component={ExpensesDashboard} />
            </Switch>
      </BrowserRouter>
         
        
      </Provider>  
    );
  }
}

export default App;
