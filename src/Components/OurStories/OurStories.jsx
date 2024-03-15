import StoryOne from "../../assets/StoryOne.jpg";
import CollectionImg1 from "../../assets/Collection_img1.jpg";
import { useEffect } from "react";
import PropTypes from "prop-types";

function OurStories({ setIsAtBottom, isAtBottom }) {
  useEffect(() => {
    const handleScroll = () => {
      // Determine the top position of the OurStories component
      const ourStoriesTopPosition =
        document.getElementById("ourStories").offsetTop;

      // Determine if the OurStories component is in view
      const isAtBottom = window.scrollY >= ourStoriesTopPosition;
      setIsAtBottom(isAtBottom);

      // store in localStorage
      localStorage.setItem("isAtBottom", JSON.stringify(isAtBottom));
    };

    window.addEventListener("scroll", handleScroll);

    // Retrieve isAtBottom from localStorage on component mount
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
      className="flex flex-col lg:flex-row justify-between bg-zinc-100 min-h-screen p-8 lg:p-32 w-full"
    >
      <div className="flex justify-center lg:justify-start items-center w-full lg:w-1/2">
        <img
          src={CollectionImg1}
          alt=""
          className="w-full max-w-lg lg:max-w-none h-auto lg:h-[60vh]"
        />
      </div>
      <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start w-full lg:w-1/2">
        <div className="mb-8 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4">
            Our Story
          </h1>
          <p className="text-base lg:text-lg xl:text-xl text-black leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            ducimus? Dolores non et fugit possimus, odit quibusdam doloremque
            iusto, ipsum similique eos nisi cumque earum neque ratione adipisci,
            exercitationem nobis?
          </p>
        </div>
        <div className="w-full lg:w-auto">
          <img
            src={StoryOne}
            alt=""
            className="w-full lg:max-w-md xl:max-w-lg h-auto lg:h-[38vh] xl:h-auto"
          />
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
