const initState = {
    // val: [null, null, null, null],
    val: [],
    // val: [1,2,3,4],
    // val1: null,
    // val2: null,
    // val3: null,
    // val4: null,
    balance: 3500,
    amount: 0,
    operation: 1,
    authenticated: true,
    fundsInfo: ""
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === 'CHANGE_OPERATION'){
        let newOperation = action.operation;
        return {
            ...state,
            operation: newOperation
        }
    }
    if (action.type === 'CHANGE_DIGIT'){
        let newDigit = action.digit;
        return {
            ...state,
            val: state.val.concat(newDigit)
        }
    }
    if (action.type === 'DELETE_PINCODE'){
        let deleteCode = []
        return {
            ...state,
            val: deleteCode
        }
    }
    if (action.type === 'DELETE_DIGIT'){
        return {
            ...state,
            val: state.val.slice(0, state.val.length-1)
        }
    }
    if (action.type === 'CHECK_CODE'){
        // console.log('elo')
        if (state.val.length > 3){
            console.log(state)
            let newUser = true
            return {
                ...state,
                authenticated: true
            }
        }
    }
    if (action.type === 'CHANGE_BALANCE'){
        let newBalance = state.balance + action.amount
        return {
            ...state,
            balance: newBalance
        }
    }
    if (action.type === 'FUNDS_INFO'){
        let newFundsInfo = action.text
        return {
            ...state,
            fundsInfo: newFundsInfo
        }
    }
    console.log(state)
    return state;
}



export default rootReducer;