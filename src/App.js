import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "font-awesome/css/font-awesome.min.css";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
