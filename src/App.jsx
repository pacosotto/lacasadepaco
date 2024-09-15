import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Menu from "./pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/inventario" element={<Inventory />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
