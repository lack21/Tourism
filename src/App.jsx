import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componenets/Layout";
import Home from "./componenets/Home";
import Destination from "./componenets/Destination";
import Crew from "./componenets/Crew";
import Technology from "./componenets/Technology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Tourism" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
