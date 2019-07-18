import React from 'react'
import { Field } from 'react-final-form'

export default function ({ name, label, required }) {

    const validateTextField = (value) => {
        if (required) {
            if (!value) return "Поле обязательно для заполения!"
        }
        return undefined
    }

    return (
        <Field name={name} validate={validateTextField}>
            {({ input, meta }) => (
                <div>
                    <label>{label}</label>
                    <input {...input} type="tel"  placeholder="+7 (123)4567890"/>
                    {meta.error && meta.touched && (<p>{meta.error}</p>)}
                </div>
            )}
        </Field>
    )
}