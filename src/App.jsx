
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TrendingUp,Newspaper,IdCard } from "lucide-react";
import Trends from './pages/Trends';
import Summarize from './pages/Summarize';
import LoginPage from './pages/Login';
import FlashCard from './pages/FlashCard';
function App() {
   const menuItems = [
    { icon: <TrendingUp size={20} />, label: "Trends", path: "/trends" },
    { icon: <Newspaper size={20} />, label: "Summarize", path: "/summary" },
    { icon: <IdCard size={20} />, label: "FlashCard", path: "/flashcard" },
  ];

  return (
     <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/trends" element={<Trends menuItems={menuItems}/>} />
        <Route path="/summary" element={<Summarize menuItems={menuItems} />} />
        <Route path="/flashcard" element={<FlashCard menuItems={menuItems} />} />
      </Routes>
    </Router>
  )
}

export default App
