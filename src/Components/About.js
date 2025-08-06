import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
          About Us
        </h1>

        <div className="w-full md:w-3/4 space-y-5 mt-5">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            architecto maiores maxime repellendus provident molestiae esse, aut
            eaque sint repellat.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            dolorem voluptatibus numquam magni velit fuga necessitatibus aut
            perspiciatis neque natus.
          </p>
        </div>
        
      </div>
      <div className="w-2/3">
          <img src="https://getwallpapers.com/wallpaper/full/5/1/1/200264.jpg" alt="img" />
        </div>
    </div>
  );
}

export default About;
