import React from 'react'

export default function ({ text, title }) {
    return (
        <li>
            <p>
                {title}
            </p>
            <p>
                {text}
            </p>
        </li>
    )
}