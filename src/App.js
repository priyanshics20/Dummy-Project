import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import LogIn from './components/LogIn';
import { useState } from 'react';
import PosOptions from './components/PosOptions';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
      <Routes>
        <Route exact path='/'  element={isLoggedIn ? <></> : <LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/posOptions' element={<PosOptions/>} />
      </Routes>
    
  )
}

export default App;
