import React, { createContext, useState, useEffect } from 'react';

export const MyContext = createContext('Default value');

export function MyProvider({ children }) {
    //Se define un estado y un set para cada uno de los datos que se quiera almacenar
    const [user, setUser] = useState(localStorage.getItem('userName') ?? 'Oscar Gomez');

    const updateUser = (newUser) => {
        setUser(newUser);
        //localStorage.setItem('userName', user);
    };

    // useEffect para guardar el usuario en localStorage cuando cambie
    useEffect(() => {
        localStorage.setItem('userName', user);
    }, [user]); // Se ejecuta cada vez que 'user' cambie


    //Render utilizando el contexto general y los hijos del componente MyProvider
    return (
        <MyContext.Provider value={{ user, updateUser }}>
            {children}
        </MyContext.Provider>
    );
}