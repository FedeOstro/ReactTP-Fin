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
    if (menu.length < 4) {
      const veganCount = await Promise.all(menu.map(item => getRecipeDetail(item.id))).then(details => details.filter(detail => detail.vegan).length);
      const nonVeganCount = menu.length - veganCount;
      if (veganCount === 2 && details.vegan) {
        alert("El menú ya tiene el máximo de 2 platos veganos, no se puede agregar más.");
        return;
      }
      if (nonVeganCount === 2 && !details.vegan) {
        alert("El menú ya tiene el máximo de 2 platos no veganos, no se puede agregar más.");
        return;
      }
    }else{
      alert("El menu ya llego al maximo de 4 platos")
      return;
    }
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

  const removePlato = async (id) => {
    const details = await getRecipeDetail(id);
    setPrice((prevPrice) => prevPrice - details.pricePerServing)
    setHealthScoreTotal((prevHealthScoreTotal) => {
      const newHealthScoreTotal = prevHealthScoreTotal - details.healthScore;
      const newMenuLenght = menu.length -1
      setHealthScore(newHealthScoreTotal / newMenuLenght)
      return newHealthScoreTotal;
    });
    setMenu((prevMenu) => prevMenu.filter((plato) => plato.id !== id));
  };

  const searchPlato = async (plato) => {
    return menu.some(item => item.id === plato.id);
  };

  return (
    <MenuContext.Provider value={{ menu, price, healthScore, addPlato, removePlato, searchPlato }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
  