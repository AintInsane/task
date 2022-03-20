import React from "react";
import Users from "./Users";

export default function UsersContainer(props) {
    const { sort } = props;

    const [{ data, loading }, setUsersState] = React.useState({
        data: null,
        loading: true
    });

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUsersState({ data, loading: false });
            });
    }, []);

    const sortedData = React.useMemo(() => {
        if (!data) {
            return null;
        }
        const sortedData = [...data];
        sortedData.sort((a, b) => {
            switch (sort) {
                case "city": {
                    return a.address.city.localeCompare(b.address.city);
                }
                case "company": {
                    return a.company.name.localeCompare(b.company.name);
                }
                default: {
                    return 0;
                }
            }
        });
        return sortedData;
    }, [sort, data]);

    return <Users data={sortedData} loading={loading} />;
}
