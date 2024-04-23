import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/OnBoarding";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/on-boarding' element={<OnBoarding />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
