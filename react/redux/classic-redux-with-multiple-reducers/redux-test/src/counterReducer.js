
const initialState = {
    count: 0
}


// reducer interprest the actions
//pure function


export const counterReducer = (state=initialState,  action) => {
    switch(action.type){
        case 'INCREMENT':
          return {
            ...state,
            count: state.count + 1
          }
        
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
              }

        default:
            return state;
    }

}