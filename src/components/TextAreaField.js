import React from 'react'
import { Field } from 'react-final-form'

export default function ({ name, label, required, maxNumberOfCharacters }) {

    const validateTextField = (value) => {
        if (required) {
            if (!value) return "Поле обязательно для заполения!"
        }
        if (maxNumberOfCharacters) {
            if (value && value.length > maxNumberOfCharacters) return `Поле не должно содержать больше ${maxNumberOfCharacters} символов`
        }
        return undefined
    }

    return (
        <Field name={name} validate={validateTextField}>
            {({ input, meta }) => (
                <div className="textAreaField">
                    <label>{label}</label>
                    <div>
                        <textarea {...input} />
                        {meta.error && meta.touched && (<p>{meta.error}</p>)}
                    </div>
                </div>
            )}
        </Field>
    )
}