import Navbar from "components/navigation/Navbar/NavBar";
import NotFound from "components/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";

const Message = () => {
  return (
    <div>
      <div>첫번째 페이지입니다. App.jsx</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<Message />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
