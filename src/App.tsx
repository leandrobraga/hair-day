import { BrowserRouter, Route, Routes } from "react-router";
import LayoutMain from "./pages/layout-main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LayoutMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
