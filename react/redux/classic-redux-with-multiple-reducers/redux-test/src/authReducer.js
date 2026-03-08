
const intitialState = {
    isLoggedIn:false,
    user: null
}


export const authReducer = (state=intitialState, action) => {
    console.log({action})
    switch(action.type){

        case "LOGIN":
            return{
                isLoggedIn:true,
                user: action.payload
            }

        case "LOGOUT":
            return{
                isLoggedIn:false,
                user: null
            }

        default:
            return state
    }
}