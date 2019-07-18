import React from 'react'
import { Link } from 'react-router-dom'

export default function ({ id, name, surname, position, imgSrc }) {
    return (
        <Link to={`/employee/${id}`}>
            <li>
                <div>
                    <img src={`https://i.pravatar.cc/150/${imgSrc}`} alt="Avatar" />
                </div>
                <div>
                    {name}  {surname} <br /> {position}
                </div>
            </li >
        </Link>
    )
}
