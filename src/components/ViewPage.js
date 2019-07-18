import React from 'react'
import CarouselEmployees from './CarouselEmployees';
import AddEmployee from './AddEmployee';
import EmployeeInfo from './EmployeeInfo';
import ListOfComments from './ListOfComments';
import FormAddComment from './FormAddComment';
import ButtonBackOnMainPage from './ButtonBackOnMainPage';

export default function ({ employee, onCreateComment, employeesForCarousel }) {
    const onCreateCommentForm = (comment) => {
        comment.id = employee.comments.length > 0 ? +employee.comments[employee.comments.length-1].id +1 : 1;
        onCreateComment(employee, comment)
    }

    return (
        <div className="viewPage">
            <CarouselEmployees employees={employeesForCarousel}/>
            <AddEmployee />
            <EmployeeInfo employee={employee} />
            <ListOfComments comments={employee.comments} />
            <FormAddComment onCreateComment={onCreateCommentForm} />
            <ButtonBackOnMainPage />
        </div>
    )
}