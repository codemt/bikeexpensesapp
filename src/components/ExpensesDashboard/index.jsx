import React, { Component } from 'react'
import { connect } from 'react-redux';
import  { showExpenses } from '../../actions/showexpenses';
 class ExpensesDashboard extends Component {


componentDidMount(){

    this.props.showExpenses();

}

  render() {
      console.log(this.props);
      console.log(this.props.expenses);

      ///const { data } = this.props.expenses;

     // console.log(this.props.expenses[0])
      //  const data = JSON.stringify(this.props.expenses); 
        //console.log(this.props.expenses[0]['id']);

        // const expense_name = this.props.expenses.map(p => p.expense_name);
        // console.log("Expense name is" , expense_name);


    return(

            <div> 
            
            <h1> Hello</h1>
                  {this.props.expenses.map(item =>
                    <ul>
                    <li> {item.expense_name}</li>
                    <li>{item.expense_amount}</li>
                    </ul>    
                    
                 )} 
               
            
            
            </div>

            

    )

    
  
  }
}
const mapStatetoProps = state  => ({
    expenses : state.expenses.expenses,


});
export default connect(mapStatetoProps,{ showExpenses })(ExpensesDashboard)
