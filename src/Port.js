import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Light from './Light';
import NewLight from './newlight';

function Port() {
  return (
    <Router>
     <Routes>
      {/* <Route path="/" element={<Light />} />
       */}
      <Route path="/" element={<NewLight />} />
      <Route path="/light" element={<App />} /> 
      </Routes>
    </Router>
  );
}

export default Port;

