import React from "react";
import Button from "@/Layouts/Button";
import Navbar from "./Navbar";
function Services() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center pt-20 gap-5">
        <div className="flex flex-row gap-10">
          <Button title="Cardiovascular Exercises"></Button>
          <Button title="Strength Training"></Button>
          <Button title="Group Fitness Classes"></Button>
        </div>
        <div className="flex flex-row gap-10">
          <Button title="Mind-Body Exercises"></Button>
          <Button title="Specialized Classes" className="pl-4"></Button>
          <Button title="Recovery and Flexibility"></Button>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col max-w-7xl justify-center items-center">
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://www.verywellfit.com/thmb/7G77UWuA2bDMIi5BhO-Pl-ZuIFs=/4606x3071/filters:fill(FFDB5D,1)/men-running-on-the-gym-treadmill-171582786-5ad7eab41f4e130038eae6f6.jpg "
                alt=""
                class=""
              />{" "}
            </div>
            <div class="grid p-2">
              <div class="font-bold text-lg text-black mt-2">
                Cardiovascular Exercises{" "}
              </div>
              <div class="text-black text-lg">
                <a href="">
                  <ol type="i">
                    <li className="mb-5">
                      <span className="text-brightRed font-bold">Walking</span>: A simple and low-impact exercise that can be done
                      almost anywhere. It's suitable for all fitness levels.
                    </li >
                    <li className="mb-5">
                      {" "}
                      <span className="text-brightRed font-bold">Running/Jogging</span>: More intense than walking, running or
                      jogging is an excellent way to boost cardiovascular
                      fitness.
                    </li>
                    <li className="mb-5">
                      <span className="text-brightRed font-bold">Cycling</span>: Whether on a stationary bike or riding outdoors,
                      cycling is a great way to get your heart pumping.
                    </li>
                  </ol>
                </a>
              </div>
            </div>
          </div>
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="grid p-2">
              <div class="font-bold text-lg text-black m-2 mt-10">
                However alert we are, antiquity remains an unknown,
                unanticipated galaxy.{" "}
              </div>

              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  The Universe is a vast and ever-expanding place. It is
                  composed of an estimated 100 billion galaxies, each with
                  billions of stars. It is estimated that there are as many as
                  100 billion galaxies in the observable universe.{" "}
                </a>
              </div>
            </div>
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?man "
                alt=""
                class=""
              />{" "}
            </div>
          </div>
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?people "
                alt=""
                class=""
              />{" "}
            </div>
            <div class="grid p-2">
              <div class="font-bold text-lg text-black m-2 mt-10">
                It is the friends you can call up at 4 a.m. that matter.{" "}
              </div>
              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  The bond of friendship is one that is often unspoken and
                  unrivaled. It is a relationship that is founded on mutual
                  respect and understanding. Friendship is something that can be
                  found in all walks of life, and is often the foundation of a
                  successful life.{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}

export default Services;
