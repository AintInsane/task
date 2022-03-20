import React from "react";
import Page from "../Page/Page";
import Button from "../Button/Button";
import Field from "../Field/Field";
import "./User.scss";

export default function User(props) {
    const { data, loading, readonly, onChangeReadonly, onSubmit } = props;

    return (
        <Page
            className="User"
            title="Профиль пользователя"
            action={
                <Button onClick={() => onChangeReadonly(!readonly)}>
                    Редактировать
                </Button>
            }
        >
            {loading && <div>loading...</div>}
            {data && (
                <form className="User-form" onSubmit={onSubmit}>
                    <div className="User-formFields">
                        <Field
                            name="name"
                            label="Name"
                            required
                            disabled={readonly}
                            defaultValue={data.name}
                        />
                        <Field
                            name="username"
                            label="User name"
                            required
                            disabled={readonly}
                            defaultValue={data.username}
                        />
                        <Field
                            name="email"
                            label="Email"
                            required
                            disabled={readonly}
                            defaultValue={data.email}
                        />
                        <Field
                            name="street"
                            label="Street"
                            required
                            disabled={readonly}
                            defaultValue={data.address.street}
                        />
                        <Field
                            name="city"
                            label="City"
                            required
                            disabled={readonly}
                            defaultValue={data.address.city}
                        />
                        <Field
                            name="zipcode"
                            label="Zip code"
                            required
                            disabled={readonly}
                            defaultValue={data.address.zipcode}
                        />
                        <Field
                            name="phone"
                            label="Phone"
                            required
                            disabled={readonly}
                            defaultValue={data.phone}
                        />
                        <Field
                            name="website"
                            label="Website"
                            required
                            disabled={readonly}
                            defaultValue={data.website}
                        />
                        <Field
                            name="comment"
                            label="Comment"
                            disabled={readonly}
                            defaultValue={data.comment}
                            fullWidth
                            inputComponent="textarea"
                        />
                    </div>
                    <div className="User-formActions">
                        <Button type="submit" disabled={readonly}>
                            Отправить
                        </Button>
                    </div>
                </form>
            )}
        </Page>
    );
}
