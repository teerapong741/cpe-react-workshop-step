import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar.shc";

function SignedLayout() {
  return <>
    <Navbar />
    <Outlet />
  </>
}

export default SignedLayout;