import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarComp from "./Navbar";
import HomeComponent from "./home";
import Button from "@/Layouts/Button";
import Plans from "@/Components/Plans";
import About from "@/Components/About";
import Trainers from "@/Components/Trainers";
import Contact from "@/Components/Contact";
import RoutingComp from "./RoutingComp";
import Signup from "@/Components/Signup";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <RoutingComp /> */}
      <Signup/>
    </div>
  );
}
