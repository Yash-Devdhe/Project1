import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "./Button";
function PlansCard(props) {
  return (
    <div className="flex flex-col bg-[#222] w-full md:w-1/2 p-5 rounded-xl">
      <h2 className="font-bold text-3xl text-center mb-3">{props.title}</h2>
      <div>
        <div className="flex justify-center">
          <span className="mt-1">
            <MdOutlineAttachMoney size={30} />
          </span>
          <h3 className="font-bold text-3xl"> {props.price}</h3>
        </div>

        <div className="flex flex-row items-center">
          <span className="inline-block mr-5">
            <AiFillCheckCircle size={22}></AiFillCheckCircle>
          </span>
          <p className="pt-5 pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            tenetur?
          </p>
        </div>
        <div className="flex flex-row items-center">
          <span className="inline-block mr-5">
            <AiFillCheckCircle size={22}></AiFillCheckCircle>
          </span>
          <p className="pt-5 pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            tenetur?
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-4">
        <Button title="Buy Plan" />
      </div>
    </div>
  );
}

export default PlansCard;
