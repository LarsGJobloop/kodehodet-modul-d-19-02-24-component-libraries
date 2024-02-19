import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LayoutRoot } from "./pages/LayoutRoot";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/about/AboutPage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutRoot />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
