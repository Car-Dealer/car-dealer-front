import './App.scss';
import Navbar from './components/Navbar/Navbar.component';
import Home from './Pages/Home/Home.page';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login/Login.page';
import Signup from './Pages/Signup/Signup.page';
import CarPost from './Pages/CarPost/CarPost.page';
import CarSearch from './Pages/CarSearch/CarSearch.page';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Routes>
        <Route exact path="/car/:id" element={<CarPost/>}/>
      </Routes>
      <Routes>
        <Route exact path="/allcar" element={<CarSearch/>}/>
      </Routes>
      {/* <Routes>
        <Route exact  path="*" element={<NotFound/>}/>
      </Routes> */}
    </Router>
  );
}

export default App;
