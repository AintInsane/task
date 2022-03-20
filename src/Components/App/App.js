import React from "react";
import { Switch, Route } from "react-router-dom";
import Button from "../Button/Button";
import UserContainer from "../User/User.container";
import UsersContainer from "../Users/Users.container";
import "./App.scss";

export default function App() {
    const [sort, setSort] = React.useState(null);

    return (
        <div className="App">
            <nav className="App-nav">
                <div className="App-navSort">
                    <div className="App-novSortLabel">Сортировка</div>
                    <Button disabled={sort === "city"} onClick={() => setSort("city")}>
                        По городу
                    </Button>
                    <Button
                        disabled={sort === "company"}
                        onClick={() => setSort("company")}
                    >
                        По компании
                    </Button>
                </div>
            </nav>
            <main className="App-main">
                <Switch>
                    <Route path="/:userId" render={() => <UserContainer />} />
                    <Route path="/" render={() => <UsersContainer sort={sort} />} />
                </Switch>
            </main>
        </div>
    );
}
