
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trends from './pages/Trends';
import Summarize from './pages/Summarize';
import LoginPage from './pages/Login';
import FlashCard from './pages/FlashCard';
import PeerUpdate from './pages/PeerUpdate';
import PageNotFound from './pages/PageNotFound';
import Account from './pages/Account';
import { MenuProvider } from './components/Context/MenuProvider';
import PressPivot from './pages/PressPivot';
import AccountReset from './components/acccountFeatures/AccountReset';
import AccountForm from './components/acccountFeatures/AccountForm';

function App() {
  return (
    <MenuProvider>
     <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/trends" element={<Trends/>} />
        <Route path="/summary" element={<Summarize  />} />
        <Route path="/flashcard" element={<FlashCard  />} />
        <Route path="/peer" element={<PeerUpdate />} />
        <Route path="/press-pivot" element={<PressPivot />} />
        <Route path="/account" element={<Account />} >
             <Route index element={<AccountForm/>} /> 
             <Route path='reset' element={<AccountReset/>} /> 
        </Route>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
    </MenuProvider>
  )
}

export default App
