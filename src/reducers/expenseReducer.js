import { ADD_EXPENSE , SHOW_EXPENSE } from '../actions/types';


//const sidebarname = "wrapper slide-menu";
let initialState = {

        expenses:[]

};

const expenseReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_EXPENSE:
        console.log('reducer called');
        console.log(state);
        console.log('action',action);
        return Object.assign({}, state, {
           
            ...state,
            expenses:action.expenses
            
        })
        case SHOW_EXPENSE:
        console.log('reducer called');
        console.log(state);
        console.log('action',action);
        return Object.assign({}, state, {
           
            ...state,
            expenses:action.expenses
            
        })
        default:
        return state;
            
    
           
} 

}
export default expenseReducer;
