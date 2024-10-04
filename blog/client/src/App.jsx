import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Add_blog from "./pages/Add_blog";


function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add-blog" element={<Add_blog />} />
        </Routes>        
      </div>
    </>
  );
}

export default App;
