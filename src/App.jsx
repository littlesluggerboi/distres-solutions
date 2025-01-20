import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default App;
