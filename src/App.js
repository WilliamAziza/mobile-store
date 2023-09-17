import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Import your custom CSS file
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import Home from './components/Home';
import Explore from './components/Explore';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
