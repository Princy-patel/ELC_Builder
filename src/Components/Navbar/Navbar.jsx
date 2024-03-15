import PropTypes from "prop-types";

function Navbar({ isAtBottom }) {
  return (
    <div
      className={`bg-transparent backdrop-blur-sm fixed z-[999] w-full px-20 py-6 flex justify-between items-center ${
        isAtBottom &&
        "shadow-lg text-white transition-all ease duration-500 bg-[#2d374899]"
      }`}
    >
      <div className="logo text-[2vw]">Logo</div>

      <div className="links flex gap-10">
        {["Services", "Our work", "About us", "Insights", "Contact us"].map(
          (items, index, array) => (
            <a
              key={index}
              className={`text-md font-semibold capitalize ${
                index === array.length - 1 && "ml-32"
              } `}
            >
              {items}
            </a>
          )
        )}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  isAtBottom: PropTypes.bool.isRequired,
};

export default Navbar;
