import React, { Component } from 'react'
import NavBar from '../components/AppBar/navbar';
import AddExpense from '../components/AddExpense';

 class AddExpenses extends Component {
  render() {
    return (
        <React.Fragment>
            <NavBar />
            <AddExpense />
        </React.Fragment>
    )
  }
}
export default AddExpenses;