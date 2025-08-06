import React from "react";
import Button from "@/Layouts/Button";
import dynamic from 'next/dynamic';
import { Link } from "react-scroll";
import Card from "./Card";
function Home() {
  const Link = dynamic(() => import("react-scroll").then((module) => module.Link), { ssr: false });
  return (
    <div className='min-h-screen pb-0 flex flex-row md:px-32 px-5 bg-[url("/gym9.jpg")] bg-cover bg-no-repeat'>
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-semibold md:text-start text-center md:w-2/3">
          One Life <span className="text-brightRed">Kill</span> it! 
          <span> Or Regret it !</span>
        </h1>
        <Link
          to="plans"  // Target the ID of the plans section
          spy={true}
          smooth={true}
          duration={1000}
          className="transition-all cursor-pointer"
        >
          <div className="w-full md:w-2/4 mt-10 flex flex-row justify-center">
            <Button title="Checkout Plans">
              Checkout Plan
            </Button>
          </div>
        </Link>
        
        </div>
      
    </div>
  );
}

export default Home;
// Design social page

// Add minimum 3-4 social activity block with description and image

// Design comment box