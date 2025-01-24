import React, { useContext,createContext } from 'react'



export let MenuContext= createContext();

let useMenu= ()=> useContext(MenuContext);



const Menu = ( {children}) => {
    const menuItems = [
        { icon: <TrendingUp size={20} />, label: "Trends", path: "/trends" },
        { icon: <Newspaper size={20} />, label: "Summarize", path: "/summary" },
        { icon: <IdCard size={20} />, label: "FlashCard", path: "/flashcard" },
      ];
  return (
    <MenuContext.Provider value={{menuItems}}>
      {children}
    </MenuContext.Provider>
  )
}

export default Menu
