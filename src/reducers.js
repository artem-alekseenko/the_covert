import { ADD_COMMENT_BEGIN } from "./actionTypes";

export default  (state = {}, action) => {
    switch (action.type) {
      case ADD_COMMENT_BEGIN:
        const newEmployee = action.employee
        newEmployee.comments.push(action.comment);
        return Object.assign(state, {
            employeesArray: state.employeesArray.map(
                oldEmployee => oldEmployee.id === action.employee.id ? newEmployee : oldEmployee
            )
        });
      default:
        return state
    }
  }