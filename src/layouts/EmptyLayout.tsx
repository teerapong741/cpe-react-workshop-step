import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar.shc";

function EmptyLayout() {
  return <>
    <Outlet />
  </>
}

export default EmptyLayout;