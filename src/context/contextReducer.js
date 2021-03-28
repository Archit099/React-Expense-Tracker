import transitions from "@material-ui/core/styles/transitions";

const transactions=[
    {id:1,}
]

const contextReducer=(state,action)=>{
let transactions;
    switch (action.type) {
        case 'Delete_Transaction':
              transactions=state.filter((t)=>t.id !== action.payload);
             return transactions;
            
        case 'Add_Transaction':
             transactions=[action.payload,...state];
             return transactions
            
        default:
            return state;
    }
 
}
export default contextReducer;