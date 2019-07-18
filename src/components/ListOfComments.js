import React from 'react'
import Comment from './Comment'

export default class listOfComments extends React.Component {

    constructor(props) {
        super(props)
        this.comments = props.comments
    }

    render() {        
        return (
            <section className="listOfComments">
                <h2>
                    Комментарии
                </h2>
                <ul>
                    {this.comments.slice(-5).reverse().map((elem) => {
                        return <Comment key={elem.id} text={elem.text} />
                    })}
                </ul>
            </section>
        )
    }
}