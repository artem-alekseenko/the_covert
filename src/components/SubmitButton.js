import React from 'react'

export default function ({ submitting, valid }) {

    return (
        <div>
            <button type="submit" disabled={!valid}>
                Отправить
           </button>
        </div>
    )
}



