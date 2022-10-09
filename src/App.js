import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import About from './pages/About.js';
import Homepage from './pages/Homepage';
import Singlepage from './pages/SinglePage.js';
function App() {
  return (
   <Router>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/singleshow/:id' element={<Singlepage/>}></Route>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
