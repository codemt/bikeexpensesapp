import React, { Component } from 'react'
import { connect } from 'react-redux';
import  { showExpenses } from '../../actions/showexpenses';
 class ExpensesDashboard extends Component {

    constructor(props){

        super(props);
        this.state = {
            data:[]
        }

}

componentDidMount(){

    this.props.showExpenses();

}

  render() {
      console.log(this.props);
      console.log(this.props.expenses);
        const data = JSON.stringify(this.props.expenses); 
        console.log(data);

        const expense_name = this.props.expenses.map(p => p.expense_name);
        console.log("Expense name is" , expense_name);


  

        return (
            <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Column heading</th>
                <th scope="col">Column heading</th>
                <th scope="col">Column heading</th>
              </tr>
            </thead>
         
                <tbody>
                {this.props.expenses.map(item => 

                    <tr class="table-active">
                    <th scope="row">Active</th>
                    <td>{item}</td>
                    
                  </tr>
                )}
              
                </tbody>  
         
            
        </table> 
        
        )

    
  
  }
}
const mapStatetoProps = state  => ({
    expenses : state.expenses.expenses,


});
export default connect(mapStatetoProps,{ showExpenses })(ExpensesDashboard)
