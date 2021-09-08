import * as constants from "./constanst";


const initialState = {

    currentMoney: 100
}

export default function store(state=initialState, action) {
    switch (action.type) {
        case constants.CHANGE_MONEY: return { ...state, currentMoney: action.payload }
        default: return state
    }
}