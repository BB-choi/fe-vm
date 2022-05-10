import menus from "mockData/menus";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Normalize from "./styles/Normalize";
import Reset from "./styles/Reset";
import VendingMachine from "./views/VendingMachine/VendingMachine";
import Wallet from "./views/Wallet/Wallet";

const App = () => {
  return (
    <div className="App">
      <Reset />
      <Normalize />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout menusData={menus} />}>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/wallet" element={<Wallet />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
