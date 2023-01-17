import Home from "./pages/home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import { React } from "react";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
export default App;
