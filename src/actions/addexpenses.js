
import { ADD_EXPENSE } from './types';
import database from '../config/firebase';
export const addExpenses = (data) =>  dispatch => {

        const expenses = [];
         expenses.push(data);
            console.log("Expense Name is" , data.title);
            console.log("Expense Amount is ", data.amount);
            console.log(data);
         database.ref().push({

            expense_name: data.title,
            expense_amount:data.amount


    });

        dispatch({

            type: ADD_EXPENSE,
            expenses :  expenses     

    })


};



