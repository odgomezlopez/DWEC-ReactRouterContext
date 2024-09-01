import React, { createContext, useState } from 'react';

export const MyContext = createContext('Default value');

export function MyProvider({ children }) {
    //Se define un estado y un set para cada uno de los datos que se quiera almacenar
    const [user, setUser] = useState('Oscar Gomez');
  
    const updateUser = (newUser) => {
      setUser(newUser);
    };
    
    //Render utilizando el contexto general y los hijos del componente MyProvider
    return (
      <MyContext.Provider value={{ user, updateUser }}>
        {children}
      </MyContext.Provider>
    );
  }