
import './App.css';
import './css/common.css';
import { Route, Routes } from 'react-router-dom';
import TourDetail from './pages/TourDetail';
import NotFound from './pages/NotFound';


function App() {
  return (
    
    <div className="App">    
      
      <Routes>       
      <Route path="/:product_id" element={<TourDetail/>} />
        <Route path="/Detail/:product_id" element={<TourDetail/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      
     
    </div>
    
    
  );
}

export default App;
