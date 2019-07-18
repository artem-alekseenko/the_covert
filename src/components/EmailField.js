import React from 'react'
import { Field } from 'react-final-form'

export default function ({ name, label, required }) {

    const validateEmailField = (value) => {
        if (required) {
            if (!value) return "Поле обязательно для заполения!"
        }
        return undefined
    }

    return (
        <Field name={name} validate={validateEmailField}>
            {({ input, meta }) => (
                <div>
                    <label>{label}</label>
                    <div>
                        <input {...input} type="email" placeholder="example@test.ru" />
                        {meta.error && meta.touched && (<p>{meta.error}</p>)}
                    </div>
                </div>
            )}
        </Field>
    )

}