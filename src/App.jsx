import NotFound from "components/NotFound/NotFound";
import Layout from "Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import menus from "stores/menus";
import Normalize from "Styles/Normalize";
import Reset from "Styles/Reset";
import VendingMachine from "views/VendingMachine/VendingMachine";
import Wallet from "views/Wallet/Wallet";

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
