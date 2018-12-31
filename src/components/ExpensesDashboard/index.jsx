import React, { Component } from 'react'
import { connect } from 'react-redux';
import  { showExpenses } from '../../actions/showexpenses';
import NavBar from '../AppBar/navbar';
 class ExpensesDashboard extends Component {


componentDidMount(){

    this.props.showExpenses();

}

  render() {
      console.log(this.props);
      console.log(this.props.expenses);


      if(this.props.expenses){

        return(

            <div> 
            <NavBar />
            
            <h1> Hello</h1>
                  {this.props.expenses.map(item =>
                    <ul>
                    <li key={item.id}> {item.expense_name}</li>
                    <li key={item.id}>{item.expense_amount}</li>
                    </ul>    
                    
                 )} 
               
            
            
            </div>

            

    )


      }
      else{

            return(

                    <div> <h1> Loading....  </h1> </div>

            )

      }
    

    
  
  }
}
const mapStatetoProps = state  => ({
    expenses : state.expenses.expenses,


});
export default connect(mapStatetoProps,{ showExpenses })(ExpensesDashboard)
