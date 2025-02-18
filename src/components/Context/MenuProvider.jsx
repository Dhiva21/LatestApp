import { createContext } from "react";
import { TrendingUp, Newspaper, IdCard } from "lucide-react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const menuItems = [
    { icon: <TrendingUp size={20} />, label: "Trends", path: "/trends" },
    { icon: <Newspaper size={20} />, label: "Summarize", path: "/summary" },
    { icon: <IdCard size={20} />, label: "FlashCard", path: "/flashcard" },
    { icon: <IdCard size={20} />, label: "Peer News", path: "/peer" },
    { icon: <IdCard size={20} />, label: "Accounts", path: "/account" },
    { icon: <IdCard size={20} />, label: "Press Pivot", path: "/press-pivot" },
  ];

  const users = [
    { name: "Admin", email: "admin@gmail.com", password: "1" },
    { name: "Dhivakar", email: "dhiva@gmail.com", password: "2" },
    { name: "Vengat", email: "vengat@gmail.com", password: "3" },
  ];

  return (
    <MenuContext.Provider value={{ menuItems, users }}>
      {children}
    </MenuContext.Provider>
  );
};
