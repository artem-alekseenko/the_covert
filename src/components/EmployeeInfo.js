import React from 'react'

export default function ({ employee }) {

    return (
        <section className="employeeInfo">
            <div className="employeeInfo__avatar">
                <img src={`https://i.pravatar.cc/300/${employee.imgSrc}`} alt="Аватар" />
            </div>
            <div className="employeeInfo__text">
                <h1 className="employeeInfo__name-surname">
                    {employee.name} {employee.surname}
                </h1>
                <h2 className="employeeInfo__position">
                    {employee.position}
                </h2>
                <p className="employeeInfo__email">
                    Email: {employee.email}
                </p>
            </div>
        </section>
    )
}