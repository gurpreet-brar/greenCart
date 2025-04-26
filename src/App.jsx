import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div>
      {isSellerPath ? <></> : <NavBar />}
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
