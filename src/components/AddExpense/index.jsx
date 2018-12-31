import React, { Component } from 'react'
import { connect } from 'react-redux';
import  { addExpenses } from '../../actions/addexpenses';
import history from '../../routes/history';
import NavBar from '../AppBar/navbar';
 class AddExpense extends Component {

        constructor(props){

                super(props);
                this.state = {
                    expense_name: '',
                    expense_amount : ''
                }

        }

        componentDidMount(){



        }

    handleChange = (e) => {

            e.preventDefault();

            this.setState({

                  [e.target.name] : e.target.value,      

            },() =>{


                    console.log(this.state);

            })


    }    
    onSubmit = (e) => {

        e.preventDefault();
        const expense_name = this.state.expense_name;
        const expense_amount = this.state.expense_amount;
        const expenses = { 
                title:expense_name,
                amount:expense_amount

        }
        this.props.addExpenses(expenses);

        setTimeout(() => {

                history.push('/dashboard');

                },1000)



    }

  render() {
        console.log(this.props);
    return (    

        <div>
        <NavBar />
                <form>
                        <input type="text" placeholder="Enter Expense Name" name="expense_name" onChange={this.handleChange} />
                        <input type="number" placeholder="Enter Amount" name="expense_amount" onChange={this.handleChange} />
                        <input type="submit"  onClick={this.onSubmit} />


                </form>
      </div>
    )
  }
}
const mapStatetoProps = state  => ({
        expenses : state.expenses.expenses,

  
  });
export default connect(mapStatetoProps,{ addExpenses })(AddExpense)