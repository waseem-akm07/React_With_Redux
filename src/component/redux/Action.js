import {ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEE} from './ActionTypes.js' 

export const getEmployee = () => {
    return dispach => {
        return dispach => ({
            type: GET_EMPLOYEE
        });
    }
};

export const addEmployee = (data) => {
    debugger;
    return dispach => {
        // console.log(dispach)
        return dispach => ({
            type: ADD_EMPLOYEE,
            payload: data
        });
    }
    debugger;
};

export const editEmployee = (data) => {
    debugger;
    return dispach => {
        // console.log(dispach)
        return dispach => ({
            type: EDIT_EMPLOYEE,
            payload: data
        });
    }
    debugger;
};

export const deleteEmployee = (id) => {
    return dispach => {
        return dispach => ({
            type: DELETE_EMPLOYEE,
            payload: id
        });
    }
};