import React from 'react'
import { Form } from 'react-final-form'
import TextField from './TextField';
import TextAreaField from './TextAreaField';
import PhoneField from './PhoneField';
import SubmitButton from './SubmitButton';


export default function ({ onCreateComment }) {

    function onSubmit(values) {
        onCreateComment(values)
    }

    const renderForm = ({ submitting, valid, handleSubmit }) => (
        <section className="formAddComment">
            <h1>
                Добавить комментарий
            </h1>
            <form onSubmit={handleSubmit}>
                <TextField name="title" label="Заголовок сообщения" required={true} minNumberOfCharacters={5} maxNumberOfCharacters={80} />
                <TextAreaField name="text" label="Текст комментария" required={true} maxNumberOfCharacters={128} />
                <PhoneField name="phone" label="Телефон" required={true} />
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