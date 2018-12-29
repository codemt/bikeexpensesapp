
import { SHOW_EXPENSE } from './types';
import database from '../config/firebase';
export const showExpenses = () =>  dispatch => {

    const expenses = [];
      
            database.ref()
            .once('value')
            .then((snapshot) => {

                  
                    snapshot.forEach((childSnapshot) => {

                            expenses.push({

                                  id: childSnapshot.key,
                                  ...childSnapshot.val()        

                            })


                    });

            });

            console.log(expenses);

        dispatch({

            type: SHOW_EXPENSE,
            expenses :  expenses     

    })

    return expenses;

};



