import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";

import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
