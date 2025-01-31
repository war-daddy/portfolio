import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Light from './Light';

function Port() {
  return (
    <Router>
     <Routes>
      <Route path="/" element={<Light />} />
      <Route path="/light" element={<App />} /> 
      </Routes>
    </Router>
  );
}

export default Port;

