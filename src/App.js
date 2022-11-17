
import './App.css';
import './css/common.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TourDetail from './pages/TourDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    
    <div className="App">    
      <Router>
      <Routes>       
      <Route path="/:product_id" element={<TourDetail/>} />
        <Route path="/Detail/:product_id" element={<TourDetail/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </Router>  
     
    </div>
    
    
  );
}

export default App;
