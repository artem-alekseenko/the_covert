import React from 'react'
import Comment from './Comment'

export default function (props) {

    return (
        <section className="listOfComments">
            <h2>
                Комментарии сотрудника
                </h2>
            <ul>
                {props.comments.slice(-5).reverse().map((elem) => {
                    return <Comment key={elem.id} text={elem.text} title={elem.title} />
                })}
            </ul>
        </section>
    )
}