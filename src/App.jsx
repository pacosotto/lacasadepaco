import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/inventario" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
