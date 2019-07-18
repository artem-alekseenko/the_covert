import React from 'react'
import ItemOfListOfEmployees from './ItemOfListOfEmployees';

export default function (props) {

    return (
        <section className="listOfEmployees">
            <ul>
                {props.employeesArray.map((elem) => {
                    return <ItemOfListOfEmployees key={elem.id} id={elem.id} name={elem.name} surname={elem.surname} position={elem.position} imgSrc={elem.imgSrc} />
                })}
            </ul>
        </section>
    )
}