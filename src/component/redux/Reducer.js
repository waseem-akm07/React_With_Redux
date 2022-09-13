import {ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, GET_EMPLOYEE} from './ActionTypes';


const initialState = {
    employees: [
        { id: 1, employeeName: "Waseem Akram", employeeAddress: "Moradabad", departmentName: "IT" },
        { id: 2, employeeName: "Avnessh Sir", employeeAddress: "Sharanpur", departmentName: "Dot Net" },
        { id: 3, employeeName: "Preet Sir", employeeAddress: "Patiala", departmentName: "React" }
    ]
}



const reducer = (state = initialState, action) => {
    console.log(action);
    debugger;
    switch (action.type) {
        case GET_EMPLOYEE:
            return {
                ...state
            };

        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.concat(action.payload)
            };

        case EDIT_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.map(
                    (content, i) => content.id === action.payload.id ? {
                        ...content, employeeName: action.payload.employeeName,
                        employeeAddress: action.payload.employeeAddress,
                        departmetName: action.payload.departmetName
                    }
                        : content)
            };

        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(
                    item => item.id !== action.payload
                )
            };

        default:
            return state;
    }
    debugger;
}

export default reducer;