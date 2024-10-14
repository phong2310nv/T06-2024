import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Cart from "../../pages/Cart";
import LoginModal from "../../pages/LoginModal";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <Cart />
      <LoginModal />
    </div>
  );
};

export default Layout;
