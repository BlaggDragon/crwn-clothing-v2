import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigation = () => (
  <>
    <h1>I am the navigation bar</h1>
    <Outlet />
  </>
);

const Shop = () => <h1>I am the shop page</h1>;

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
    </Route>
  </Routes>
);

export default App;
