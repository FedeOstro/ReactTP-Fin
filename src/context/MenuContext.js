import React, { createContext, useState, useContext } from 'react';
import { getRecipeDetail } from '../lib/fetchRecipes'

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [price, setPrice] = useState(0)
  const [healthScoreTotal, setHealthScoreTotal] = useState(0)
  const [healthScore, setHealthScore] = useState(0)

  const addPlato = async (plato) => {
    const details = await getRecipeDetail(plato.id);
    setPrice((prevPrice) => prevPrice + details.pricePerServing);
    setHealthScoreTotal((prevHealthScoreTotal) => {
      const newHealthScoreTotal = prevHealthScoreTotal + details.healthScore;
      setMenu((prevMenu) => {
        const updatedMenu = [...prevMenu, plato];
        const newHealthScore = newHealthScoreTotal / updatedMenu.length;
        setHealthScore(newHealthScore);
        return updatedMenu;
      });
      return newHealthScoreTotal;
    });
  };
  
  

  const removePlato = (id) => {
    setMenu((prevMenu) => prevMenu.filter((plato) => plato.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menu, price, healthScore, addPlato, removePlato }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
  