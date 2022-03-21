import React from "react";
import User from "./User";
import { useParams } from "react-router-dom";

export default function UserContainer(props) {
    const { userId } = useParams();

    const [{ data, loading }, setUserState] = React.useState({
        data: null,
        loading: true
    });

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUserState({ data, loading: false });
            });
    }, [userId]);

    const [readonly, setReadonly] = React.useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            street: formData.get("street"),
            city: formData.get("city"),
            zipcode: formData.get("zipcode"),
            phone: formData.get("phone"),
            website: formData.get("website"),
            comment: formData.get("comment")
        };
        console.log(JSON.stringify(payload));
    };

    return (
        <User
            data={data}
            loading={loading}
            readonly={readonly}
            onChangeReadonly={setReadonly}
            onSubmit={handleSubmit}
        />
    );
}
