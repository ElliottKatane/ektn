import Index from "./pages/Index";
import About from "./pages/About";
import Works from "./pages/Works";
import Insta from "./components/InstaFeeds";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" exact={true} element={<About />} />
        <Route path="/works" exact={true} element={<Works />} />
        <Route path="/insta" exact={true} element={<Insta />} />
        {/* shift + alt + arrDown = Copier la ligne vers le bas*/}
        {/* Route path="*": fonctionne si jamais l'url ne correspond à rien de déclaré*/}
        <Route path="*" exact={true} element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
