import NotFound from "components/NotFound/NotFound";
import Layout from "Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "Styles/Reset";
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
      <Reset />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Message />} />
            <Route path="/test" element={<Test />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
