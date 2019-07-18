import React from 'react'
import { Field } from 'react-final-form'

export default function ({ name, label, required, minNumberOfCharacters, maxNumberOfCharacters }) {

    const validateTextField = (value) => {
        if (required) {
            if (!value) return "Поле обязательно для заполения!"
        }
        if (minNumberOfCharacters) {
            if (value && value.length < minNumberOfCharacters) return `Поле должно содержать больше ${minNumberOfCharacters} символов`
        }
        if (maxNumberOfCharacters) {
            if (value && value.length > maxNumberOfCharacters) return `Поле не должно содержать больше ${maxNumberOfCharacters} символов`
        }
        return undefined
    }

    return (
        <Field name={name} validate={validateTextField}>
            {({ input, meta }) => (
                <div>
                    <label>{label}</label>
                    <div>
                        <input {...input} />
                        {meta.error && meta.touched && (<p>{meta.error}</p>)}
                    </div>
                </div>
            )}
        </Field>
    )
}