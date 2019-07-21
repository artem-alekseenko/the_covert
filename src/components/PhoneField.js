import React from 'react'
import { Field } from 'react-final-form'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input/max'

export default function ({ name, label, required }) {

    const  validatePhoneField = (value) => {
        if (required) {
            if (!isValidPhoneNumber(value)) return "Введите правильный номер"
        }
        return undefined
    }

    return (
        <Field name={name} validate={validatePhoneField} >
            {({ input, meta }) => (
                <div className="phoneNumber">
                    <label>{label}</label>
                    <PhoneInput
                        {...input}
                        type={"tel"}
                        value={"+7"}
                        onCnange={validatePhoneField}
                        country={"RU"}
                        showCountrySelect={false}                        
                    />                    
                    {meta.error && meta.touched && (<p>{meta.error}</p>)}
                </div>
            )}
        </Field>
    )
}