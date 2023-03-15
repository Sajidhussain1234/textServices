import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Router>   
      
      <Navbar></Navbar>
    <Routes>
      <Route exact path='/' element={<TextForm/>}></Route>
    </Routes>
      <Routes>
      <Route exact path='/about' element={<About/>}></Route>
      </Routes>
      
    </Router>
    </>
  );
}
export default App;
