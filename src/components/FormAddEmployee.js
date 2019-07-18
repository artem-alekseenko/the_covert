import React from 'react'
import { Form } from 'react-final-form'
import TextField from './TextField';
import EmailField from './EmailField';
import SubmitButton from './SubmitButton';

export default function ({ onCreateEmployee }) {

    function onSubmit(values) {
        onCreateEmployee(values)
    }

    const renderForm = ({ submitting, valid, handleSubmit }) => (
        <section className="formAddEmployee">
            <h2>
                Добавить сотрудника
            </h2>
            <form onSubmit={handleSubmit}>
                <TextField name="name"
                    label="Имя сотрудника"
                    required={true}
                />
                <TextField name="surname"
                    label="Фамилия сотрудника"
                    required={true}
                />
                <TextField name="position"
                    label="Должность"
                    required={true}
                />
                <EmailField
                    name="email"
                    label="Электронная почта"
                    required={true}
                />
                <SubmitButton submitting={submitting} valid={valid} />
            </form>
        </section>
    )

    return (
        <Form
            onSubmit={onSubmit}
            render={renderForm}
        />
    )
}