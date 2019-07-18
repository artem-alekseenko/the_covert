import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <Link to="/" className="buttonBackOnMainPage">
            <button >На главную</button>
        </Link>
    )
}