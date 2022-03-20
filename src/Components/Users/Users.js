import React from "react";
import Page from "../Page/Page";
import { NavLink } from "react-router-dom";
import "./Users.scss";

export default function Users(props) {
    const { data, loading } = props;

    return (
        <Page className="Users" title="Список пользователей">
            {loading && <div>loading...</div>}
            {data && (
                <div>
                    <ul className="Users-list">
                        {data.map((user) => (
                            <li key={user.id} className="Users-card">
                                <div className='Users-cardItem'><div >ФИО:</div> {user.name}</div>
                                <div className='Users-cardItem'><div>Город:</div> {user.address.city}</div>
                                <div className='Users-cardItem'><div >Компания:</div> {user.company.name}</div>
                                <NavLink  to={`/${user.id}`}>Подробнее</NavLink>
                            </li>
                        ))}
                    </ul>
                    Найдено {data.length}
                </div>
            )}
        </Page>
    );
}
