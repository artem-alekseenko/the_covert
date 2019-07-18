import React from 'react'
import CarouselEmployees from './CarouselEmployees';
import FormAddEmployee from './FormAddEmployee';
import EmployeeInfo from './EmployeeInfo';
import ListOfComments from './ListOfComments';
import FormAddComment from './FormAddComment';
import ButtonBackOnMainPage from './ButtonBackOnMainPage';

export default function ({ employee, onCreateEmployee, onCreateComment, employeesForCarousel }) {

    const onCreateEmployeeForm = (employee) => {
        onCreateEmployee (employee)
    }

    const onCreateCommentForm = (comment) => {
        comment.id = employee.comments.length > 0 ? +employee.comments[employee.comments.length-1].id +1 : 1;
        onCreateComment(employee, comment)
    }
        
        return (            
        <div className="viewPage">
            <CarouselEmployees employees={employeesForCarousel}/>
            <FormAddEmployee onCreateEmployee={onCreateEmployeeForm}/>
            <EmployeeInfo employee={employee} />
            <ListOfComments comments={employee.comments} />
            <FormAddComment onCreateComment={onCreateCommentForm} />
            <ButtonBackOnMainPage />
        </div>
    )
}