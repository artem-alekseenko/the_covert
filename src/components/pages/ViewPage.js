import React from 'react'
import CarouselEmployees from '../CarouselEmployees';
import FormAddEmployee from '../FormAddEmployee';
import EmployeeInfo from '../EmployeeInfo';
import ListOfComments from '../ListOfComments';
import FormAddComment from '../FormAddComment';
import ButtonBackOnMainPage from '../ButtonBackOnMainPage';

export default function ({ employeeId, employeesArray }) {

    // const onCreateEmployeeForm = (employee) => {
    //     onCreateEmployee (employee)
    // }

    // const onCreateCommentForm = (comment) => {
    //     comment.id = employee.comments.length > 0 ? +employee.comments[employee.comments.length-1].id +1 : 1;
    //     onCreateComment(employee, comment)
    // }
        const employee = getEmployee(employeeId)
        
        return (            
        <div className="viewPage">
            <CarouselEmployees employees={employeesArray}/>
            <FormAddEmployee />
            <EmployeeInfo employee={employee} />
            <ListOfComments comments={employee.comments} />
            <FormAddComment  />
            <ButtonBackOnMainPage />
        </div>
    )
}