import { createContext, useContext, useEffect, useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory,
  } from "react-router-dom";
const rawDefaultUser = window.localStorage.getItem('user');

const defaultUser = JSON.parse(rawDefaultUser);

const userContext = createContext(defaultUser);

export const UserProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(defaultUser);

    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user));
        // history.push('/Header');
    }, [user]);

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
};

export const useUser = () => useContext(userContext);