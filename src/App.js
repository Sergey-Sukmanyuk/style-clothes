import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";

import Home from "./psges/home/home";
import Shop from "./psges/shop/shop";


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
