import React from 'react'

export default function ({ employee }) {

    return (
        <section className="employeeInfo">
            <div className="employeeInfo__avatar">
                <img src={`https://i.pravatar.cc/300/${employee.imgSrc}`} alt="Аватар" />
            </div>
            <div className="employeeInfo__text">
                <h1>
                    {employee.name} {employee.surname}
                </h1>
                <h2>
                    {employee.position}
                </h2>
                <p>
                    Email: {employee.email}
                </p>
            </div>
        </section>
    )
}