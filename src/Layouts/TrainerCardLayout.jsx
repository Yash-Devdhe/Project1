import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaTwitterSquare } from "react-icons/fa";
function TrainerCardLayout(props) {
  return (
    <div className="flex flex-col items-center gap-3 pt-8 w-full md:w-3/5  bg-[#222] rounded-xl">
      <div className="flex flex-row gap-5 w-full">
        <div>
          <div className="pl-3">
            <img src={props.img} className="rounded-lg" alt="image" height={30} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center">
              {props.name}
            </h1>
            <div className="pb-5 flex flex-row gap-5 items-center justify-center">
              <FaInstagram
                size={25}
                className="hover:text-[#e53961] cursor-pointer"
              />
              <SiFacebook
                size={25}
                className="hover:text-[#426782] cursor-pointer"
              />
              <FaTwitterSquare
                size={25}
                className="hover:text-[#539613] cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="pb-10 pr-10 pl-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est
          nam ratione dolores debitis dolorem aut quaerat voluptates nobis
          repellat deleniti provident hic ipsum culpa, voluptas beatae
          aspernatur molestias nesciunt minima facere? Voluptatum cum, quod ea
          nihil error officia laborum possimus voluptatibus corrupti odio
          mollitia eaque iste cupiditate, excepturi sit accusantium numquam
          magnam cumque! Consequatur ullam impedit laboriosam labore architecto
          illo? Sapiente sed aperiam ipsa? Quo magni nobis voluptate impedit
          recusandae repellendus molestias provident mollitia beatae harum,
          assumenda ipsum accusamus optio est enim in perspiciatis eos, sequi
          nam reiciendis cumque expedita nihil molestiae eaque! Molestiae nulla
          voluptas et nihil porro.
        </div>
      </div>
    </div>
  );
}

export default TrainerCardLayout;
