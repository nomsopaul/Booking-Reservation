import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Hotel from "./pages/hotel/Hotel.jsx"
import List from "./pages/List/List.jsx";
import Login from "./pages/login/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/flights" element={<List/>} />
        <Route path="/flights/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
