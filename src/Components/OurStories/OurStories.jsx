import StoryOne from "../../assets/StoryOne.jpg";
import CollectionImg1 from "../../assets/Collection_img1.jpg";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function OurStories({ setIsAtBottom, isAtBottom }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const ourStoriesTopPosition =
        document.getElementById("ourStories").offsetTop;
      const isAtBottom = window.scrollY >= ourStoriesTopPosition;
      setIsAtBottom(isAtBottom);
      localStorage.setItem("isAtBottom", JSON.stringify(isAtBottom));
    };

    window.addEventListener("scroll", handleScroll);

    const storeIsAtBottom = JSON.parse(localStorage.getItem("isAtBottom"));

    if (storeIsAtBottom !== null) {
      setIsAtBottom(storeIsAtBottom);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAtBottom]);

  return (
    <div
      id="ourStories"
      className="w-full max-md:min-h-screen overflow-hidden bg-zinc-100 p-8 lg:p-[10vw] lg:flex"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:w-full">
        <div className="lg:w-1/2 flex justify-center items-center lg:px-10">
          <img
            src={CollectionImg1}
            alt="Image"
            className="w-full h-auto lg:h-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:px-10">
          <div className="text-center lg:text-left text-zinc-900 mb-10">
            <h1 className="text-3xl lg:text-5xl font-semibold">Our Story</h1>
            <p className="leading-normal pt-2">
              For over two decades, Studio Meriland has been creating timeless
              pieces for modern homes. Artistry, quality, and a touch of luxury
              — that's the Meriland design philosophy.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src={StoryOne}
              alt="Another Image"
              className="w-full h-auto lg:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

OurStories.propTypes = {
  setIsAtBottom: PropTypes.func.isRequired,
  isAtBottom: PropTypes.bool.isRequired,
};

export default OurStories;
