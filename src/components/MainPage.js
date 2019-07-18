import React from 'react'
import ListOfEmployees from './ListOfEmployees';

export default function ({ employeesArray }) {
    return (
        <div className="wrapper">
            <h1>
                Список сотрудников
            </h1>
            <ListOfEmployees employeesArray={employeesArray} />
        </div>
    )
}