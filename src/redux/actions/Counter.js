import actionTypes from "./actionTypes";

// 递增
export const increment = (val) =>{
    return {
        type: actionTypes.COUNTER_INCREMENT,
        payload: val
    }
}

// 递减
export const decrement = (val) =>{
    return {
        type: actionTypes.COUNTER_DECREMENT,
        payload: val
    }
}