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
      className="w-full h-screen overflow-hidden bg-zinc-100 p-[8vw]"
    >
      <div className="flex gap-[10vw] w-full h-full">
        <div className="flex-1 flex justify-center items-center">
          <img src={CollectionImg1} alt="Image" className="w-full h-full" />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="flex-1 flex flex-col justify-start items-start text-zinc-900">
            <h1 className="text-[3.5vw] font-semibold">Our Story</h1>
            <p className="leading-[3vh] pt-2">
              For over two decades, Studio Meriland has been creafting timeless
              pieces for modern homes. Artistry, quality and a touch of luxury
              &apos; thats the meriland design philosophy.
            </p>
          </div>
          <div className="flex-1 w-full overflow-hidden">
            <img
              src={StoryOne}
              alt="Another Image"
              className="w-full h-full object-cover"
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
