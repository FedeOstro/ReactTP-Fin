import React, { createContext, useState, useContext } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  const addPlato = (plato) => {
    setMenu((prevMenu) => [...prevMenu, plato]);
  };

  const removePlato = (id) => {
    setMenu((prevMenu) => prevMenu.filter((plato) => plato.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menu, addPlato, removePlato }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
  