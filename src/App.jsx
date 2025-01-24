
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TrendingUp,Newspaper,IdCard } from "lucide-react";
import Trends from './pages/Trends';
import Summarize from './pages/Summarize';
import LoginPage from './pages/Login';
import FlashCard from './pages/FlashCard';
import PeerNews from   './components/PeerNews'
import  {createContext } from 'react'
import Dummy from './pages/PeerUpdate';
import PeerUpdate from './pages/PeerUpdate';
import PageNotFound from './pages/PageNotFound';

export let MenuContext= createContext();





function App() {
  const menuItems = [
    { icon: <TrendingUp size={20} />, label: "Trends", path: "/trends" },
    { icon: <Newspaper size={20} />, label: "Summarize", path: "/summary" },
    { icon: <IdCard size={20} />, label: "FlashCard", path: "/flashcard" },
    { icon: <IdCard size={20} />, label: "Peer News", path: "/peer" },
    
  ];
  return (
    <MenuContext.Provider value={{menuItems}}>
     <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/trends" element={<Trends/>} />
        <Route path="/summary" element={<Summarize  />} />
        <Route path="/flashcard" element={<FlashCard  />} />
        <Route path="/peer" element={<PeerUpdate />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
    </MenuContext.Provider>
  )
}

export default App
