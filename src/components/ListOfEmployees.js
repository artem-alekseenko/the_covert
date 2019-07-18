import React from 'react'
import ItemOfListOfEmployees from './ItemOfListOfEmployees';

export default class ListOfEmployees extends React.Component {

    constructor(props) {
        super(props)
        this.employeesArray = props.employeesArray
    }


    render() {

        return (
            <section className="listOfEmployees">
                <ul>
                    {this.employeesArray.map((elem) => {
                        return <ItemOfListOfEmployees key={elem.id} id={elem.id} name={elem.name} surname={elem.surname} position={elem.position} imgSrc={elem.imgSrc} />
                    })}
                </ul>
            </section>
        )
    }
}
