const initState = {
    val: [],
    balance: 15000,
    amount: 0,
    operation: 0,
    authenticated: false,
    fundsInfo: "Please select amount",
    customAmount: 0,
}

const rootReducer = (state = initState, action) => {
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
        //this one could validate if the entered PIN and user id is correct but since it is not a requirement in this excercise it only checkes if entered PIN has 4 digits
        if (state.val.length > 3){
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
    if (action.type === 'ADD_CUSTOM_AMOUNT'){
        let newAmount = state.customAmount + action.val
        if(newAmount[0] === "0") newAmount = newAmount.slice(1, newAmount.length)
        return {
            ...state,
            customAmount: newAmount
        }
    }
    if (action.type === 'DELETE_CUSTOM_AMOUNT') {
        return {
            ...state,
            customAmount: 0
        }
    }
    if (action.type === 'DELETE_CUSTOM_AMOUNT_LAST_DIGIT') {
        let newCustomAmount = state.customAmount
        if (newCustomAmount !== 0 && newCustomAmount.length === 1) {
            newCustomAmount = 0
        } else if (newCustomAmount.length > 1){
            newCustomAmount = newCustomAmount.slice(0,newCustomAmount.length-1)
        }
        return {
            ...state,
            customAmount: newCustomAmount
        }
    }
    return state;
}



export default rootReducer;