import { Outlet } from "react-router-dom";
import Background from "../components/Background/Background";
import Navigation from "../components/Navigation/Navigation";

export default function RootPage() {
  return <>
    <Background />
    <Navigation />
    <Outlet />
  </>
}
