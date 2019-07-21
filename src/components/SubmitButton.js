import React from 'react'

export default function ({ submitting, valid }) {

    return (
        <div className="submitButton">
            <button type="submit" disabled={!valid}>
                Отправить
           </button>
        </div>
    )
}



