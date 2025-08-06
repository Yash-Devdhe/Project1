import React from "react";
import TrainerCardLayout from "@/Layouts/TrainerCardLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Trainers() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-20">
      <h1 className='text-4xl font-semibold text-center mb-10'>Our Trainers</h1>
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          stopOnHover={true}
          transitionTime={2000}
          className="flex flex-col justify-center items"
        >
          <div className="carousel-slide flex justify-center items-center">
            <TrainerCardLayout img="https://th.bing.com/th/id/OIP.uUxZq7gjVhkK-CgPMOjT8gHaFj?w=2000&h=1500&rs=1&pid=ImgDetMain" name="Jayesh" />
          </div>
          <div className="carousel-slide flex justify-center items-center">
            <TrainerCardLayout img="https://www.tekportal.net/wp-content/uploads/2019/01/personal-trainer-1.png" name="Harish" />
          </div>
          <div className="carousel-slide flex justify-center items-center">
            <TrainerCardLayout img="https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg" name="John" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Trainers;
