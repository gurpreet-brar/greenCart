import MainBanner from "./components/MainBanner";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<MainBanner />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
