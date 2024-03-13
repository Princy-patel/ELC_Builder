function Navbar() {
  return (
    <div className="bg-transparent backdrop-blur-sm fixed z-[999] w-full px-20 py-8 flex justify-between items-center">
      <div className="logo">Logo</div>

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

export default Navbar;
