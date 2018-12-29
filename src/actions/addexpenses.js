
import { ADD_EXPENSE } from './types';

export const addExpenses = (expenses) =>  dispatch => {



        dispatch({

            type: ADD_EXPENSE,
            expenses :  expenses     

    



    })


};



